import { Page, FrameLocator, Locator, expect } from "@playwright/test";

class EnquirePage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(EnquirePage.iframeLocator);
    this.successTextLocator = this.frame1.locator(EnquirePage.thankYouMessage);
  }

  // Navigate to the enquire page and wait for iframe to load completely
  async navigate() {
    await this.page.goto("/enquire", { timeout: 60000 });

    // Ensure the iframe is attached
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${EnquirePage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );

    // Get the iframe's frame instance
    const frame = this.page.frame({ name: EnquirePage.iframeLocator });

    if (!frame) {
      throw new Error("Iframe not found");
    }

    // Wait for the iframe's document to be fully loaded
    await frame.evaluate(() => {
      return new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", () => resolve());
        }
      });
    });
  }

  // Submit the enquiry form with provided data
  async submitForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    course: string;
    date: string;
    message: string;
  }): Promise<void> {
    const frame1 = this.page.frame(EnquirePage.iframeLocator);

    // Fill out form fields
    await frame1!.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1!.fill('input[placeholder="Last Name*"]', formData.lastName);
    await frame1!.fill('input[placeholder="Email*"]', formData.email);
    await frame1!.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1!.selectOption('select[name="country"]', {
      value: formData.country,
    });
    await frame1!.selectOption('select[name="course"]', {
      value: formData.course,
    });
    await frame1!.selectOption('select[name="departure_date"]', {
      value: formData.date,
    });
    await frame1!.fill("textarea", formData.message);

    // Agree to terms and optionally sign up for the newsletter
    await frame1!.click("input#tc_agree");
    await frame1!.click("input#newsletter_signup");

    // Click submit button twice
    const submitButton = await frame1!.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  // Verify success message after form submission
  async verifySuccessMessage() {
    const frame1 = this.page.frame(EnquirePage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      EnquirePage.thankYouMessage,
      { state: "visible" }
    );

    expect(await successAlert!.textContent()).toContain(
      "Thank you for reaching out to Bushwise."
    );
  }
}

export default EnquirePage;
