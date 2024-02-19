/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class OnlineCoursesSubmenu {
    page: Page;
    onlineCourses: Locator;
    introToFieldGuiding: Locator;
    natureEnthusiast: Locator;
    fGASAFieldGuiding: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.onlineCourses = page.locator("//span[contains(text(),'ONLINE COURSES')]");
        this.fGASAFieldGuiding = page.locator("//span[contains(text(),'FGASA Field Guiding online course')]");
        this.natureEnthusiast = page.locator("//span[contains(text(),'Nature Enthusiast online course')]");
        this.introToFieldGuiding = page.locator("//span[contains(text(),'Introduction Field Guiding online course')]");

    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
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

    async navigateToIntroductionToFieldGuidingOnlineCoursesPage(){
        await this.introToFieldGuiding.click();
    }

    async hoverOverOnlineCourses(){
        await this.onlineCourses.hover();
    }

}

export default OnlineCoursesSubmenu;
