/* eslint-disable playwright/no-wait-for-selector */
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

  async navigate() {
    await this.page.goto("/download-a-brochure", { timeout: 60000 });

    // Ensure page has fully loaded by waiting for all network requests to finish
    // eslint-disable-next-line playwright/no-networkidle
    await this.page.waitForLoadState("networkidle", { timeout: 60000 });

    // Scroll the page incrementally to the bottom
    await this.page.evaluate(async () => {
      let totalHeight = document.body.scrollHeight;
      let currentPosition = window.scrollY;
      const step = 500;
      const delay = 200;

      // Scroll until we reach the bottom
      while (currentPosition + window.innerHeight < totalHeight) {
        window.scrollBy(0, step);
        currentPosition += step;
        totalHeight = document.body.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    });

    // Wait for the iframe to be fully loaded and attached
    await this.page.waitForSelector(
      `iframe[name="${DownloadPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );

    // Wait for form inside the iframe to be visible
    const frame1 = this.page.frame(DownloadPage.iframeLocator);
    await frame1?.waitForSelector('input[placeholder="First Name*"]', {
      state: "visible",
      timeout: 60000,
    });
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

    // Fill out form fields after ensuring they are visible
    await frame1!.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1!.fill('input[placeholder="Last Name*"]', formData.lastName);
    await frame1!.fill('input[placeholder="Email*"]', formData.email);
    await frame1!.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1!.selectOption('select[name="country"]', {
      value: formData.country,
    });

    // Click submit button twice to ensure form submission
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
      { state: "visible", timeout: 60000 }
    );

    // Ensure the success message contains the expected text
    expect(await successAlert!.textContent()).toContain(
      "You’ve just taken an exciting step towards a career in wildlife."
    );
  }
}

export default DownloadPage;
