import { Page, Locator } from "@playwright/test";
import BasePage from "../base/basePage.page";

class CookieBanner extends BasePage {
  page: Page;
  allowAllBtn: Locator;
  declineBtn: Locator;
  manageCookiesLink: Locator;
  privacyPolicyLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.allowAllBtn = page.locator("//button[@id='ez-cookie-notification__accept']");
    this.declineBtn = page.locator(
      "//button[@id='ez-cookie-notification__decline']"
    );
    this.manageCookiesLink = page.locator(
      "//a[@id='notificationManagerLink']"
    );
    this.privacyPolicyLink = page.locator(
      "//a[@id='notificationPolicyLink']"
    );
  }

  async allowAllCookies() {
    await this.allowAllBtn.click();
    await this.page.waitForLoadState("load");
    return this.page;
  }

  async declineAllCookies() {
    await this.declineBtn.click();
    await this.page.waitForLoadState("load");
    return this.page;
  }

  async navigateToCookieOptions() {
    await this.manageCookiesLink.click();
    await this.page.waitForLoadState("load");
    return this.page;
  }

  async navigateToPrivacyPolicyPage() {
    await this.privacyPolicyLink.click();
    await this.page.waitForLoadState("load");
    return this.page;
  }
}

export default CookieBanner;
