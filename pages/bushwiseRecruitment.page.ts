import { Page, Locator } from "@playwright/test";
import BasePage from "./base/basePage.page";

class BushwiseRecruitmentPage extends BasePage {
    page: Page;
    url: string = '/bushwise-recruitment';
    industryFirstHeading: Locator;
    bushwiseEmploymentGuaranteeLink: Locator;
    enquireBtn: Locator;
    howItWorksHeading: Locator;
    employmentGuaranteeHeading: Locator;
    readMoreBtn: Locator;

    constructor(page: Page) {
      super(page);
        this.page = page;
        this.industryFirstHeading = page.locator("//h1[contains(text(),'Industry first in offering a free recruitment serv')]");
        this.bushwiseEmploymentGuaranteeLink = page.locator("//a[normalize-space()='Bushwise Employment Guarantee']");
        this.enquireBtn = page.locator("(//span[@class='StylableButton2545352419__label wixui-button__label'][normalize-space()='Enquire'])[3]");
        this.howItWorksHeading = page.locator("//h3[normalize-space()='How does it work?']");
        this.employmentGuaranteeHeading = page.locator("(//span[normalize-space()='The employment guarantee'])[1]");
        this.readMoreBtn = page.locator("(//div[@class='StylableButton2545352419__container'])[10]");
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

    async navigateToEnquirePage() {
        return this.navigateToPageAndClick(this.enquireBtn);
    }

    async navigateToEmploymentGuaranteePageViaEnquireLink() {
        return this.navigateToPageAndClick(this.bushwiseEmploymentGuaranteeLink);
    }

    async navigateToEmploymentGuaranteePageViaReadMoreBtn() {
        return this.navigateToPageAndClick(this.readMoreBtn);
    }
}

export default BushwiseRecruitmentPage;
