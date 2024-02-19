import { Page, Locator } from "@playwright/test";
import BasePage from "./base/basePage.page";

class PlacementsPage extends BasePage {
    page: Page;
    url: string = '/placements';
    placementsLodgesHeading: Locator;
    placementLocationsHeading: Locator;
    hearFromStudentsAndStaffHeading: Locator;
    bushwisePlacementsHeading: Locator;
    kapamaRiverLodge: Locator;
    lowveldTrailsCo: Locator;
    siyafunda: Locator;
    gorongaSafariCamp: Locator;
    rukiyaSafariCamp: Locator;
    africaonFoot: Locator;
    bundoxSafariLodge: Locator;
    harnasWildlifeFoundation: Locator;
    moholoholoRehabCentre: Locator;
    nyatiSafariLodge: Locator;
    k9Conservation: Locator;
    gviLimpopo: Locator;
    leoAfrica: Locator;
    makalaliReserve: Locator;
    bushwiseProfessionalFieldGuideLink: Locator;
  

    constructor(page: Page) {
      super(page);
        this.page = page;
        this.placementsLodgesHeading = page.locator("//span[contains(text(),'Placements at prestigious lodges and reserves in S')]");
        this.placementLocationsHeading = page.locator("//h3[normalize-space()='locations']");
        this.hearFromStudentsAndStaffHeading = page.locator("//h3[normalize-space()='Hear from']");
        this.bushwisePlacementsHeading = page.locator("//h3[normalize-space()='Bushwise placements']");
        this.kapamaRiverLodge = page.locator("//span[normalize-space()='Kapama River Lodge']");
        this.lowveldTrailsCo = page.locator("//h5[normalize-space()='Lowveld Trails Co.']");
        this.siyafunda = page.locator("//h5[normalize-space()='Siyafunda']");
        this.gorongaSafariCamp = page.locator("//span[normalize-space()='Garonga Safari Camp']");
        this.rukiyaSafariCamp = page.locator("//span[normalize-space()='Rukiya Safari Camp']");
        this.africaonFoot = page.locator("//h5[normalize-space()='Africa on Foot']");
        this.bundoxSafariLodge = page.locator("//span[normalize-space()='Bundox Safari']");
        this.harnasWildlifeFoundation = page.locator("//span[normalize-space()='Harnas Wildlife']");
        this.moholoholoRehabCentre = page.locator("(//h5[@class='font_5 wixui-rich-text__text'])[8]");
        this.nyatiSafariLodge = page.locator("//span[normalize-space()='NYATI Safari Lodge']");
        this.k9Conservation = page.locator("//h5[normalize-space()='K9 Conservation']");
        this.gviLimpopo = page.locator("//h5[normalize-space()='GVI Limpopo']");
        this.leoAfrica = page.locator("//h5[normalize-space()='LEO Africa']");
        this.makalaliReserve = page.locator("//span[normalize-space()='Makalali Reserve']");
        this.bushwiseProfessionalFieldGuideLink = page.locator("//a[normalize-space()='Bushwise Professional Field Guide course']");
    }

    async navigateTo() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState();
    }

    async navigateToPageAndClick(link: Locator) {
        await link.click();
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
        return this.page;
    }

    async navigateToBushwiseProfessionalFieldGuidePage() {
        return this.navigateToPageAndClick(this.bushwiseProfessionalFieldGuideLink);
    }
}

export default PlacementsPage;
