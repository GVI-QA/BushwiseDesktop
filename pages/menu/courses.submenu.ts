/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class CoursesSubmenu {
    page: Page;
    courses: Locator;
    professionalFieldGuide: Locator;
    sixtyDaySafari: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.courses = page.locator("(//div[@class='itemDepth02233374943__container'])[1]");
        this.professionalFieldGuide = page.locator("//span[contains(text(),'Bushwise Professional Field Guide Course')]");
        this.sixtyDaySafari = page.locator("//span[contains(text(),'Bushwise 60-day Safari Guide Course')]");
    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToCoursesPage(){
        await this.courses.click();
    }

    async navigateToProfessionalFieldGuidingPage(){
        await this.professionalFieldGuide.click();
    }

    async navigateToSixtyDaySafariPage(){
        await this.sixtyDaySafari.click();
    }

    async hoverOverCourses(){
        await this.courses.hover();
    }
}

export default CoursesSubmenu;
