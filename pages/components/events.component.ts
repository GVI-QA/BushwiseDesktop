import { Page, Locator } from "@playwright/test";

class EventsComponent {
    private page: Page;
    campusOnlineRegisterBtn: Locator;
    virtualOnlineRegisterBtn: Locator;
    webinarRegisterBtn: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.campusOnlineRegisterBtn = page.locator("(//a[@class='VU4Mnk wixui-button PlZyDq'])[1]");
        this.virtualOnlineRegisterBtn = page.locator("#comp-lo6v2ke0_r_comp-lnx4lwic8 > a");
        this.webinarRegisterBtn = page.locator("div[id='comp-lo6v2ke0_r_comp-lnx4m1if'] span[class='kclxHl wixui-button__label']");
    }

    async navigateToCampusOpenDayPage(){
        await this.campusOnlineRegisterBtn.click();
    }

    async navigateToVirtualOpenDayPage(){
        await this.virtualOnlineRegisterBtn.click();
        // await this.page.waitForNavigation();
    }

    async navigateToWebinarPage(){
        await this.webinarRegisterBtn.click();
    }
}

export default EventsComponent;