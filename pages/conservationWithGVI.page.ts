import { Page, Locator } from "@playwright/test";
import BasePage from "./base/basePage.page";

class ConservationWithGVIPage extends BasePage {
    page: Page;
    url: string = '/conservation-with-gvi';
    conservationWithGVIHeading: Locator;
    gviLimpopoHeading: Locator;
    wildlifeInternshipsExpeditionHeading: Locator;
    wildlifeReseachLink: Locator;
    wildlifeConservationInternshipLink: Locator;
    bigCatConservationResearchLink: Locator;
    bigCatResearchInternshipLink: Locator;
    cheetahConservationLink: Locator;
    elephantResearchLink: Locator;
    wildlifeConservationTeenVolunteerLink: Locator;
    rhinoPoachingLink: Locator;
    wildlifeConservationShortTermInternshipLink: Locator;
    volunteerInLimpopo: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.conservationWithGVIHeading = page.locator("//span[@class='wixui-rich-text__text'][normalize-space()='Conservation with GVI']");
        this.gviLimpopoHeading = page.locator("//h3[normalize-space()='GVI Limpopo']");
        this.wildlifeInternshipsExpeditionHeading = page.locator("//h3[normalize-space()='GVI Wildlife Internships and Expeditions']");
        this.wildlifeReseachLink = page.locator("//a[normalize-space()='Wildlife research']");
        this.wildlifeConservationInternshipLink = page.locator("//a[normalize-space()='Wildlife conservation internship']");
        this.bigCatConservationResearchLink = page.locator("//a[normalize-space()='Big cat conservation research']");
        this.bigCatResearchInternshipLink = page.locator("//a[normalize-space()='Big cat research short term internship']");
        this.cheetahConservationLink = page.locator("//a[normalize-space()='Cheetah conservation project']");
        this.wildlifeConservationShortTermInternshipLink = page.locator("//a[normalize-space()='Wildlife conservation short term internship']");
        this.elephantResearchLink = page.locator("//a[normalize-space()='Elephant research']");
        this.wildlifeConservationTeenVolunteerLink = page.locator("//a[normalize-space()='Wildlife conservation teen volunteer program']");
        this.rhinoPoachingLink = page.locator("//a[normalize-space()='Rhino poaching awareness']");
        this.volunteerInLimpopo = page.locator("//a[@href='https://www.gvi.co.uk/location/limpopo/']");
    }

    async navigateTo() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState();
    }

    async navigateToPageAndClick(link: Locator) {
        await link.click();
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
        const [newPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            link.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded', { timeout: 60000 });
        return newPage;
    }

    async navigateToWildlifeResearchSAPage() {
        return this.navigateToPageAndClick(this.wildlifeReseachLink);
    }

    async navigateToWildlifeConservationApprenticeshipSAPage() {
        return this.navigateToPageAndClick(this.wildlifeConservationInternshipLink);
    }

    async navigateToBigCatConservationResearchAPage() {
        return this.navigateToPageAndClick(this.bigCatConservationResearchLink);
    }

    async navigateToBigCatConservationInternshipAPage() {
        return this.navigateToPageAndClick(this.bigCatResearchInternshipLink);
    }

    async navigateToCheetahConversationAndResearchPage() {
        return this.navigateToPageAndClick(this.cheetahConservationLink);
    }

    async navigateToWildlifeConservationInternshipPage() {
        return this.navigateToPageAndClick(this.wildlifeConservationShortTermInternshipLink);
    }

    async navigateToElephantResearchPage() {
        return this.navigateToPageAndClick(this.elephantResearchLink);
    }

    async navigateToWildlifConservationTeensVolunteeringPage() {
        return this.navigateToPageAndClick(this.wildlifeConservationTeenVolunteerLink);
    }

    async navigateToRhinoPoachingPage() {
        return this.navigateToPageAndClick(this.rhinoPoachingLink);
    }

    async navigateToVolunteerInLimpopoPage() {
        return this.navigateToPageAndClick(this.volunteerInLimpopo);
    }
}

export default ConservationWithGVIPage;