/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class OnlineCoursesSubmenu {
    page: Page;
    onlineCourses: Locator;
    introToFieldGuiding: Locator;
    natureEnthusiast: Locator;
    fGASAFieldGuiding: Locator;
    natureEnthusiastHeading: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.onlineCourses = page.locator("//span[contains(text(),'ONLINE COURSES')]");
        this.fGASAFieldGuiding = page.locator("//span[contains(text(),'Bushwise Field Guiding online course')]");
        this.natureEnthusiast = page.locator("//span[contains(text(),'Nature Enthusiast online course')]");
        this.introToFieldGuiding = page.locator("//span[contains(text(),'Introduction Field Guiding online course')]");
        this.natureEnthusiastHeading = page.locator("//span[normalize-space()='Nature Enthusiast Online Course']");

    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    // async navigateToPageAndClick(link: Locator) {
    //     await link.click();
    //     await this.page.waitForLoadState('networkidle');
    //     // await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    //     return this.page;
    // }

    async navigateToPageAndClick(link: Locator) {
        await link.click();
        await this.page.waitForLoadState('networkidle');
        return this.page;
    }
    

    async navigateToOnlineCoursesPage(){
        await this.onlineCourses.click();
    }

    async navigateToFGASAFieldGuidingOnlineCoursePage(){
        await this.fGASAFieldGuiding.click();
    }

    async navigateToNatureEnthusiastOnlineCoursePage(){
        await this.natureEnthusiast.click();
    }

    // async navigateToNatureEnthusiastOnlineCoursePage() {
    //     const [newPage] = await Promise.all([
    //         this.page.context().waitForEvent('page'),
    //         this.navigateToPageAndClick(this.natureEnthusiast),
    //     ]);
    //     await newPage.waitForLoadState('networkidle', { timeout: 60000 });
    //     return newPage;
    // }
    
    
    
    
    
    

    async navigateToIntroductionToFieldGuidingOnlineCoursesPage(){
        await this.introToFieldGuiding.click();
    }

    async hoverOverOnlineCourses(){
        await this.onlineCourses.hover();
    }

}

export default OnlineCoursesSubmenu;
