import { Page, Locator } from "@playwright/test";

class ProfessionalFieldGuidingPage {
    page: Page;
    pageTitle: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.pageTitle = page.locator("//title[contains(text(),'Professional Field Guide Course | 23 or 50 Week Co')]");
        

    }

    async navigate(){
        await this.page.goto('/professional-field-guide-course');
    }

    getPageTitle(){
        return this.getPageTitle();
    }

}

export default ProfessionalFieldGuidingPage;
