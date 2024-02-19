/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class ExperiencesSubmenu {
    page: Page;
    experiences: Locator;
    conservationWithGVI: Locator;
   
    
    constructor(page: Page){
        this.page = page;
        this.experiences = page.locator("//span[contains(text(),'EXPERIENCES')]");
        this.conservationWithGVI = page.locator("//span[contains(text(),'Conservation with GVI')]");
    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToConservationWithGVIPage(){
        await this.conservationWithGVI.click();
    }

    async hoverOverExperiences(){
        await this.experiences.hover();
    }
}

export default ExperiencesSubmenu;