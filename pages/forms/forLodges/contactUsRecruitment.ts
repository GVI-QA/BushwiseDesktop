import { Page, FrameLocator, Locator } from "@playwright/test";

class ContactUsRecruitmentPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Static locators for iframe and success message
  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(ContactUsRecruitmentPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(ContactUsRecruitmentPage.thankYouMessage);
  }

  // Navigate to the contact page and ensure iframe is loaded
  async navigate() {
    await this.page.goto("/contact-us-recruitment", { timeout: 60000 });
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${ContactUsRecruitmentPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );
  }

  // Submit the form with provided data
  async submitForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country?: string;
    message: string;
    interestedIn: "Services for Lodges" | "Services for Professionals";
  }): Promise<void> {
    const frame1 = this.page.frame(ContactUsRecruitmentPage.iframeLocator);

    if (!frame1) {
      throw new Error("Frame not found");
    }

    // Fill out form fields
    await frame1.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1.fill('input[placeholder="Surname*"]', formData.lastName);
    await frame1.fill('input[placeholder="Email*"]', formData.email);
    await frame1.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1.selectOption('select[name="interested_in"]', {
      value: formData.interestedIn
    });
    await frame1.fill("textarea", formData.message);

    // Sign up for newsletter
    await frame1.click('//*[@id="newsletter_signup"]');

    // Click submit button twice
    // eslint-disable-next-line playwright/no-element-handle
    const submitButton = await frame1.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  // Verify if the success message is displayed
  async verifySuccessMessage(): Promise<boolean> {
    const frame1 = this.page.frame(ContactUsRecruitmentPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      ContactUsRecruitmentPage.thankYouMessage,
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

export default ContactUsRecruitmentPage;
