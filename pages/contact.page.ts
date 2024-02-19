import { Page, FrameLocator, Locator, expect } from "@playwright/test";

/**
 * ContactPage class represents the page object for the contact form.
 * It provides methods to navigate to the contact page, submit the form,
 * and verify the success message.
 */
class ContactPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Define static constants for locators
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(ContactPage.iframeLocator);

    // Set successText locator within the frame
    this.successTextLocator = this.frame1.locator(ContactPage.thankYouMessage);
  }

  /**
   * Navigate to the contact page.
   * @returns Promise<void>
   */
  async navigate() {
    await this.page.goto('/contact-us');
  }

  /**
 * Submit the contact form with the provided form data.
 * @param formData - Object containing form data (firstName, lastName, email, etc.).
 * @returns Promise<void>
 */
async submitForm(formData: {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  country: string,
  message: string
}): Promise<void> {
  const frame1 = this.page.frame("htmlComp-iframe");

  // Fill out the input fields with form data
  await frame1!.fill('input[placeholder="First Name*"]', formData.firstName);
  await frame1!.fill('input[placeholder="Last Name*"]', formData.lastName);
  await frame1!.fill('input[placeholder="Email*"]', formData.email);
  await frame1!.fill('input[placeholder="Phone*"]', formData.phone);
  await frame1!.selectOption('select[name="country"]', { value: formData.country });
  await frame1!.fill("textarea", formData.message);

  // Select checkboxes
  await frame1!.click("input#tc_agree");
  await frame1!.click("input#newsletter_signup");

  // Click submit (retry 2 times)
  const submitButton = await frame1!.$("button[type='submit']");
  for (let i = 0; i < 2; i++) {
    await submitButton?.click();
  }
}

  /**
   * Verify if the success message is displayed after form submission.
   * @returns Promise<void>
   */
  async verifySuccessMessage() {
    const frame1 = this.page.frame(ContactPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      ContactPage.thankYouMessage,
      { state: "visible" }
    );

    // Verify success message
    expect(await successAlert!.textContent()).toContain(
      "Thank you for reaching out to Bushwise."
    );
  }
}

export default ContactPage;
