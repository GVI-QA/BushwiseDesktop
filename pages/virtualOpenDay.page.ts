import { Page, FrameLocator, Locator, expect } from "@playwright/test";

class VirtualOpenDayPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage = '//h1[normalize-space()="Your place is booked!"]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(VirtualOpenDayPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(
      VirtualOpenDayPage.thankYouMessage
    );
  }

  // Navigate to the virtual open day page and wait for iframe
  async navigate() {
    await this.page.goto("/virtual-open-day", { timeout: 60000 });
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${VirtualOpenDayPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );
  }

  // Submit the virtual open day form with provided data
  async submitForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
  }): Promise<void> {
    const frame1 = this.page.frame(VirtualOpenDayPage.iframeLocator);

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

  // Verify success message after form submission
  async verifySuccessMessage() {
    const frame1 = this.page.frame(VirtualOpenDayPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      VirtualOpenDayPage.thankYouMessage,
      { state: "visible" }
    );

    expect(await successAlert!.textContent()).toContain(
      "Your place is booked!"
    );
  }
}

export default VirtualOpenDayPage;
