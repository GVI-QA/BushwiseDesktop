import { Page, Locator } from "@playwright/test";
import EventsComponent from "./components/events.component";

class HomePage {
    page: Page;
    goIntoTheWildBtn: Locator;
    headingText: Locator;
    nameAndLogo: Locator;
    navLinks: Locator;
    learnOnlineBtn: Locator;
    experienceMoreBtn: Locator;
    campusOnlineRegisterBtn: Locator;
    virtualOnlineRegisterBtn: Locator;
    webinarRegisterBtn: Locator;
    instagramLink: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.goIntoTheWildBtn = page.locator("//span[normalize-space()='Go into the wild']");
        this.learnOnlineBtn = page.locator("//span[normalize-space()='Learn online']");
        this.experienceMoreBtn = page.locator("//span[normalize-space()='Experience more']");
        this.campusOnlineRegisterBtn = page.locator("(//a[@class='TFOeq0 wixui-button zKbzSQ'])[1]");
        this.virtualOnlineRegisterBtn = page.locator("(//a[@class='TFOeq0 wixui-button zKbzSQ'])[2]");
        this.webinarRegisterBtn = page.locator("div[id='comp-lo6v2ke0_r_comp-lnx4m1if'] span[class='kclxHl wixui-button__label']");
        this.instagramLink = page.locator("//a[normalize-space()='@bushwise']");
        this.headingText = page.locator('text=Choose your');
        this.nameAndLogo = page.locator('//*[@id="comp-ln0yip0a_r_comp-lm8z9wee"]');
        this.navLinks = page.locator('//*[@class="StylableHorizontalMenu3372578893__menu"]//*[@class="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item wixui-horizontal-menu__submenu-title"]');

    }

    async navigate(){
        await this.page.goto('/');
    }

    getNavLinksText(){
        return this.navLinks.allTextContents();
    }

    async navigateToWildlifeCoursesPage(){
        await this.goIntoTheWildBtn.click();
    }

    async navigateToOnlineCoursesPage(){
        await this.learnOnlineBtn.click();
    }

    async navigateToConservationWithGVIPage(){
        await this.experienceMoreBtn.click();
    }

    eventsComponent(){
        return new EventsComponent(this.page);
    }

    async navigateToGVIInstagramPage() {
        await this.page.waitForLoadState();
        const [newPage] = await Promise.all([
          this.page.waitForEvent("popup"),
          await this.instagramLink.click(),
        ]);
        await newPage.waitForLoadState();
        return newPage;
      }

    async navigateToHomePage(){
        await this.nameAndLogo.click();
    }

}

export default HomePage;