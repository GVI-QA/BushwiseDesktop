/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";
import BasePage from "../base/basePage.page";

class CareersSubmenu extends BasePage{
    page: Page;
    careers: Locator;
    placements: Locator;
    employmentGuarantee: Locator;
    bushwiseRecruitment: Locator;
    alumniStories: Locator;
    wildlifeJobs: Locator;
    
    
    constructor(page: Page){
        super(page);
        this.page = page;
        this.careers = page.locator("//span[contains(text(),'CAREERS')]");
        this.placements = page.locator("//span[contains(text(),'Placements')]");
        this.employmentGuarantee = page.locator("//span[contains(text(),'Employment Guarantee')]");
        this.bushwiseRecruitment = page.locator("//span[contains(text(),'Bushwise Recruitment')]");
        this.alumniStories = page.locator("//span[contains(text(),'Alumni Stories')]");
        this.wildlifeJobs = page.locator("//span[contains(text(),'Wildlife Jobs')]");

    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
        
    }

    async navigateToPlacementsPage(){
        await this.placements.click();
        await this.page.waitForLoadState('networkidle');
    return this.page; 
    }

    async navigateToEmploymentGuaranteePage(){
        await this.employmentGuarantee.click();
        await this.page.waitForLoadState('networkidle');
    return this.page;
    }

    async navigateToBushwiseRecruitmentPage(){
        await this.bushwiseRecruitment.click();
        await this.page.waitForLoadState('networkidle');
    return this.page;
    }

    async navigateToAlumniStoriesPage(){
        await this.alumniStories.click();
        await this.page.waitForLoadState('networkidle');
    return this.page;
    }

    async navigateToWildlifeJobsPage(){
        await this.wildlifeJobs.click();
        await this.page.waitForLoadState('networkidle');
    return this.page;
    }

    async hoverOverCareers(){
        await this.careers.hover();
    }
}

export default CareersSubmenu;