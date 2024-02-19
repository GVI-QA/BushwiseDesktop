import { Page, Locator } from "@playwright/test";
import BasePage from "./base/basePage.page";

class EmploymentGuaranteePage extends BasePage {
    page: Page;
    url: string = '/employment-guarantee';
    bushwiseFieldGuidesLink: Locator;
    startYourFieldGuidingCareerLink: Locator;
    ourUniqueOfferHeading: Locator;
    applyNowBtn: Locator;
    yourMoneyBackHeading: Locator;
    howItWorksHeading: Locator;
    ourAlumniHeading: Locator;
    testimonials: Locator;
    readSuccessStoriesBtn: Locator;
    
  

    constructor(page: Page) {
      super(page);
        this.page = page;
        this.bushwiseFieldGuidesLink = page.locator("//a[normalize-space()='Bushwise Field Guides']");
        this.startYourFieldGuidingCareerLink = page.locator("//a[normalize-space()='Start your field guiding career']");
        this.ourUniqueOfferHeading = page.locator("//h3[normalize-space()='Our unique offer']");
        this.applyNowBtn = page.locator("(//div[@class='StylableButton2545352419__container'])[9]");
        this.yourMoneyBackHeading = page.locator("//h3[normalize-space()='Your money back']");
        this.howItWorksHeading = page.locator("//h3[normalize-space()='How it works']");
        this.ourAlumniHeading = page.locator("//span[normalize-space()='Our Alumni']");
        this.testimonials = page.locator("//div[@role='list']");
        this.readSuccessStoriesBtn = page.locator("(//div[@class='StylableButton2545352419__container'])[10]");
    }

    async navigateTo() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState();
    }

    async navigateToPageAndClick(link: Locator) {
        await link.click();
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
        return this.page;
    }

    async navigateToFieldGuideJobsPage() {
        return this.navigateToPageAndClick(this.bushwiseFieldGuidesLink);
    }

    async navigateToBushwiseProfessionalFieldGuidePage() {
        return this.navigateToPageAndClick(this.startYourFieldGuidingCareerLink);
    }

    async navigateToApplicationPage() {
        return this.navigateToPageAndClick(this.applyNowBtn);
    }

    async navigateToAlumniStoriesPage() {
        return this.navigateToPageAndClick(this.readSuccessStoriesBtn);
    }
}

export default EmploymentGuaranteePage;
