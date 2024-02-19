/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";
import BasePage from "../base/basePage.page";

class AboutSubmenu extends BasePage{
    page: Page;
    about: Locator;
    aboutUs: Locator;
    ourStory: Locator;
    iFGA: Locator;
    meetTheTeam: Locator;
    whyBushwise: Locator;
    events: Locator;
    blog: Locator;
    bushwiseCampus: Locator;
    ourPartners: Locator;
    
    constructor(page: Page){
        super(page);
        this.page = page;
        this.about = page.locator("//span[contains(text(),'ABOUT')]");
        this.aboutUs = page.locator("//span[contains(text(),'About us')]");
        this.ourStory = page.locator("//span[contains(text(),'Our story')]");
        this.iFGA = page.locator("(//span[@class='itemDepth12472627565__label wixui-horizontal-menu__submenu-item-label'][normalize-space()='IFGA'])[1]");
        this.meetTheTeam = page.locator("(//span[@class='itemDepth12472627565__label wixui-horizontal-menu__submenu-item-label'][normalize-space()='Meet the team'])[1]");
        this.whyBushwise = page.locator("//span[contains(text(),'Why Bushwise?')]");
        this.events = page.locator("//span[contains(text(),'Events')]");
        this.blog = page.locator("//span[contains(text(),'Blog')]");
        this.bushwiseCampus = page.locator("//span[contains(text(),'Bushwise Campus')]");
        this.ourPartners = page.locator("//span[contains(text(),'Our partners')]");

    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    // async navigateAndVerifyTitle(link: () => Promise<void>, expectedTitle: string) {
    //     await link();
    //     await expect(this.page).toHaveTitle(expectedTitle, { timeout: 10000 });
    // }

    async navigateToAboutUsPage(){
        await this.aboutUs.click();
        await this.page.waitForLoadState('networkidle');
    return this.page; 
    }

    async navigateToOurStoryPage(){
        await this.ourStory.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToIFGAPage(){
        await this.iFGA.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToMeetTheTeamPage(){
        await this.meetTheTeam.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToWhyBushwisePage(){
        await this.whyBushwise.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }
    
    async navigateToEventsPage(){
        await this.events.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToArticlesPage(){
        await this.blog.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToBushwiseCampusPage(){
        await this.bushwiseCampus.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async navigateToOurPartnersPage(){
        await this.ourPartners.click();
        await this.page.waitForLoadState('networkidle');
        return this.page
    }

    async hoverOverAbout(){
        await this.about.hover();
    }
}

export default AboutSubmenu;