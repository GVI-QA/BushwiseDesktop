import { Page, Locator } from "@playwright/test";

class ButtonsSubmenu {
    page: Page;
    gviLogo: Locator;
    applyNow: Locator;
    callUS: Locator;
    enquire: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.gviLogo = page.locator("(//*[name()='svg'][@role='presentation'])[1]");
        this.applyNow = page.locator("(//span[@class='StylableButton2545352419__label wixui-button__label'][normalize-space()='APPLY NOW'])[2]");
        this.enquire = page.locator("(//div[@class='StylableButton2545352419__container'])[3]");
        this.callUS = page.locator("(//span[@class='StylableButton2545352419__label wixui-button__label'][normalize-space()='Call us'])[1]");
    }

    async navigate(){
        await this.page.goto('/');
    }
}

export default ButtonsSubmenu;