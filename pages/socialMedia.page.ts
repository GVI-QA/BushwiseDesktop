import { Locator, Page } from "@playwright/test";

export class SocialMedia {
  readonly page: Page;
  readonly tikTokIcon: Locator;
  readonly instagramIcon: Locator;
  readonly youTubeIcon: Locator;
  readonly facebookIcon: Locator;
  readonly linkedInIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tikTokIcon = page.locator("//img[@alt='TikTok']");
    this.instagramIcon = page.locator("//img[@alt='Instagram']");
    this.youTubeIcon = page.locator("//img[@alt='YouTube']");
    this.facebookIcon = page.locator("//img[@alt='Facebook']");
    this.linkedInIcon = page.locator("//img[@alt='LinkedIn']");
  }

  async goto() {
    await this.page.goto("/");
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async navigateToSocialMediaTab(socialMediaAltText: string) {
    await this.page.waitForLoadState();
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.locator(`//img[@alt='${socialMediaAltText}']`).click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}
