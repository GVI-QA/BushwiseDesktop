import { Page, FrameLocator, Locator, expect } from "@playwright/test";

class DownloadPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="You’ve just taken an exciting step towards a career in wildlife."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(DownloadPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(DownloadPage.thankYouMessage);
  }

  // Navigate to the download page and ensure iframe is loaded
  async navigate() {
    await this.page.goto("/download-a-brochure", { timeout: 60000 });
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${DownloadPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );
  }

  // Submit the form with provided data
  async submitForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
  }): Promise<void> {
    const frame1 = this.page.frame(DownloadPage.iframeLocator);

    // Fill out form fields
    await frame1!.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1!.fill('input[placeholder="Last Name*"]', formData.lastName);
    await frame1!.fill('input[placeholder="Email*"]', formData.email);
    await frame1!.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1!.selectOption('select[name="country"]', {
      value: formData.country,
    });

    // Click submit button twice
    const submitButton = await frame1!.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  // Verify if the success message is displayed
  async verifySuccessMessage() {
    const frame1 = this.page.frame(DownloadPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      DownloadPage.thankYouMessage,
      { state: "visible" }
    );

    expect(await successAlert!.textContent()).toContain(
      "You’ve just taken an exciting step towards a career in wildlife."
    );
  }
}

export default DownloadPage;
