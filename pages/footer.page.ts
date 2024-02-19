/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class Footer {
    page: Page;
    termsAndConditions: Locator;
    privacyPolicy: Locator;
    websiteTermOfUse: Locator;
    termsOfService: Locator;
    downloadABrochure: Locator;
    contactUs: Locator;
    referralPartnerships: Locator;
    faqs: Locator;
    downloadBtn: Locator;
  
    
    
    constructor(page: Page){
        this.page = page;
        this.termsAndConditions = page.locator("//a[normalize-space()='Terms & Conditions']");
        this.privacyPolicy = page.locator("//a[normalize-space()='Privacy Policy']");
        this.websiteTermOfUse = page.locator("//a[normalize-space()='Website Terms of Use']");
        this.termsOfService = page.locator("//a[normalize-space()='Terms of Service']");
        this.downloadABrochure = page.locator("//a[normalize-space()='Download a Brochure']");
        this.contactUs = page.locator("//a[normalize-space()='Contact Us']");
        this.referralPartnerships = page.locator("//a[normalize-space()='Referral Partnership']");
        this.faqs = page.locator("//a[@class='wixui-rich-text__text'][normalize-space()='FAQs']");
        this.downloadBtn = page.locator("(//div[@class='StylableButton2545352419__container'])[12]");
    }

    async navigate(){
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToTermsAndConditionsPage(){
        await this.termsAndConditions.click();
    }

    async navigateToPrivacyPolicyPage(){
        await this.privacyPolicy.click();
    }

    async navigateToWebsiteTermsOfUsePage(){
        await this.websiteTermOfUse.click();
    }

    async navigateToTermsOfServicePage(){
        await this.termsOfService.click();
    }

    async navigateToDownloadABrochurePageViaLink(){
        await this.downloadABrochure.click();
    }

    async navigateToContactUsPage(){
        await this.contactUs.click();
    }

    async navigateToReferralPartnershipPage(){
        await this.referralPartnerships.click();
    }

    async navigateToFAQsPage(){
        await this.faqs.click();
    }

    async navigateToDownloadABrochurePageViaBtn(){
        await this.downloadBtn.click();
    }
}

export default Footer;