/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";
import BasePage from "../base/basePage.page";

class ContactSubmenu extends BasePage {
    page: Page;
    contact: Locator;
    
    constructor(page: Page){
        super(page);
        this.page = page;
        this.contact = page.locator("//span[contains(text(),'CONTACT')]");
    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToContactPage(){
        await this.contact.click();
        await this.page.waitForLoadState('networkidle');
    return this.page;
    }

}

export default ContactSubmenu;