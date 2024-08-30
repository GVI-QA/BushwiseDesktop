import { Page, FrameLocator, Locator } from "@playwright/test";

class ContactPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(ContactPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(ContactPage.thankYouMessage);
  }

  // Navigate to the contact page and ensure iframe is loaded
  async navigate() {
    await this.page.goto("/contact-us", { timeout: 60000 });
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${ContactPage.iframeLocator}"]`,
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
    message: string;
  }): Promise<void> {
    const frame1 = await this.page.frame(ContactPage.iframeLocator);

    if (!frame1) {
      throw new Error("Frame not found");
    }

    // Fill out form fields
    await frame1.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1.fill('input[placeholder="Last Name*"]', formData.lastName);
    await frame1.fill('input[placeholder="Email*"]', formData.email);
    await frame1.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1.selectOption('select[name="country"]', {
      value: formData.country,
    });
    await frame1.fill("textarea", formData.message);

    // Agree to terms and optionally sign up for newsletter
    await frame1.click("input#tc_agree");
    await frame1.click("input#newsletter_signup");

    // Click submit button twice
    const submitButton = await frame1.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  // Verify if the success message is displayed
  async verifySuccessMessage(): Promise<boolean> {
    const frame1 = await this.page.frame(ContactPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      ContactPage.thankYouMessage,
      { state: "visible" }
    );

    if (successAlert) {
      const successText = await successAlert.textContent();
      return (
        successText?.includes("Thank you for reaching out to Bushwise.") ??
        false
      );
    }
    return false;
  }
}

export default ContactPage;
