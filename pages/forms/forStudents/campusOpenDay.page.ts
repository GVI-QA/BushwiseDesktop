import { Page, FrameLocator, Locator, expect } from "@playwright/test";

class CampusOpenDayPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage = '//h1[normalize-space()="Your place is booked!"]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(CampusOpenDayPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(
      CampusOpenDayPage.thankYouMessage
    );
  }

  // Navigate to the campus open day page
  async navigate() {
    await this.page.goto("/campus-open-day", { timeout: 60000 });

    // Ensure the page is fully loaded by waiting for all network requests to finish
    // eslint-disable-next-line playwright/no-networkidle
    await this.page.waitForLoadState("networkidle", { timeout: 60000 });

    // Scroll the page incrementally to the bottom
    await this.page.evaluate(async () => {
      let totalHeight = document.body.scrollHeight;
      let currentPosition = window.scrollY;
      const step = 500;
      const delay = 200;

      // Incrementally scroll down the page
      while (currentPosition + window.innerHeight < totalHeight) {
        window.scrollBy(0, step);
        currentPosition += step;
        totalHeight = document.body.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    });

    // Wait for the iframe to be fully loaded and attached
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${CampusOpenDayPage.iframeLocator}"]`,
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
    const frame1 = this.page.frame("htmlComp-iframe");

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

  // Verify the success message is displayed
  async verifySuccessMessage() {
    const frame1 = this.page.frame(CampusOpenDayPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      CampusOpenDayPage.thankYouMessage,
      { state: "visible" }
    );

    // Assert success message content
    expect(await successAlert!.textContent()).toContain(
      "Your place is booked!"
    );
  }
}

export default CampusOpenDayPage;
