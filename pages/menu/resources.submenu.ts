/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class ResourcesSubmenu {
    page: Page;
    resources: Locator;
    downloadABrochure: Locator;
    referAFriend: Locator;
    faqs: Locator;
    parentGuide: Locator;
    financialAid: Locator;
    fgasaAccreditation: Locator;
    cathssetaAccreditation: Locator;
    bushwiseVideoGallery: Locator;
    news: Locator;
    
    
    constructor(page: Page){
        this.page = page;
        this.resources = page.locator("//span[contains(text(),'RESOURCES')]");
        this.downloadABrochure = page.locator("(//span[@class='itemDepth12472627565__label wixui-horizontal-menu__submenu-item-label'][normalize-space()='Download a brochure'])[1]");
        this.referAFriend = page.locator("//span[contains(text(),'Refer a friend')]");
        this.faqs = page.locator("//span[contains(text(),'FAQs')]");
        this.parentGuide = page.locator("//span[contains(text(),'Parent Guide')]");
        this.financialAid = page.locator("//span[contains(text(),'Financial aid')]");
        this.fgasaAccreditation = page.locator("//span[contains(text(),'FGASA accreditation')]");
        this.cathssetaAccreditation = page.locator("//span[contains(text(),'CATHSSETA accreditation')]");
        this.bushwiseVideoGallery = page.locator("//span[contains(text(),'Bushwise Video Gallery')]");
        this.news = page.locator("//span[contains(text(),'News')]");
    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToDownloadABrochurPage(){
        await this.downloadABrochure.click();
    }

    async navigateToReferAFriendPage(){
        await this.referAFriend.click();
    }

    async navigateToFAQstPage(){
        await this.faqs.click();
    }

    async navigateToParentGuidePage(){
        await this.parentGuide.click();
    }

    async navigateToFinancialAidPage(){
        await this.financialAid.click();
    }

    async navigateToFGASAAccreditationPage(){
        await this.fgasaAccreditation.click();
    }

    async navigateToCATHSSETAAccreditationPage(){
        await this.cathssetaAccreditation.click();
    }

    async navigateToBushwiseVideoGalleryPage(){
        await this.bushwiseVideoGallery.click();
    }

    async navigateToBushwiseMediaPage(){
        await this.news.click();
    }

    async hoverOverResources(){
        await this.resources.hover();
    }
}

export default ResourcesSubmenu;