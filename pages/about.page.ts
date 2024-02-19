import { Page } from "@playwright/test";

class AboutPage {
    page: Page;
    
    constructor(page: Page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto('/about-us');
    }
}

export default AboutPage;