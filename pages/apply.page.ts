import { Page, FrameLocator, Locator } from "@playwright/test";

class ApplyPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  static iframeLocator = "htmlComp-iframe"; // Locator for the iframe containing the form
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]'; // XPath for the success message

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(ApplyPage.iframeLocator); // Initialize iframe locator
    this.successTextLocator = this.frame1.locator(ApplyPage.thankYouMessage); // Initialize success message locator
  }

  // Navigate to the apply page
  async navigate() {
    await this.page.goto("/apply-now");
  }

  // Fill out and submit the form with provided data
  async submitForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    course: string;
    date: string;
    message: string;
    birthYear: string;
    levelOfEducation?: string;
    fieldExperience?: string;
    grantValue?: string;
  }): Promise<void> {
    const frame1 = this.page.frame(ApplyPage.iframeLocator); // Get the iframe

    // Fill out the form fields
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

    // Optionally fill additional fields based on provided data
    if (formData.levelOfEducation) {
      await frame1!.selectOption('select[name="highest_level_of_education"]', {
        value: formData.levelOfEducation,
      });
    }

    if (formData.fieldExperience) {
      await frame1!.selectOption('select[name="field_experience"]', {
        value: formData.fieldExperience,
      });
    }

    if (formData.grantValue) {
      await frame1!.selectOption('select[name="grant_value"]', {
        value: formData.grantValue,
      });

      // Click additional options if grantValue is provided
      await frame1!.click("input#personal_savings");
      await frame1!.click("input#parents-or-caregivers");
      await frame1!.click("input#personal-loans");
      await frame1!.click("input#inheritance");
      await frame1!.click("input#fundraising");
    }

    // Fill out remaining fields and submit the form
    await frame1!.selectOption('select[name="dob_y"]', {
      value: formData.birthYear,
    });
    await frame1!.fill("textarea", formData.message);

    await frame1!.click("input#tc_agree"); // Agree to terms and conditions
    await frame1!.click("input#newsletter_signup"); // Optionally sign up for newsletter

    const submitButton = await frame1!.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click(); // Click the submit button twice
    }
  }

  // Verify if the success message is displayed
  async verifySuccessMessage(): Promise<boolean> {
    const frame1 = this.page.frame(ApplyPage.iframeLocator); // Get the iframe
    const successAlert = await frame1!.waitForSelector(
      ApplyPage.thankYouMessage,
      { state: "visible", timeout: 10000 } // Wait for the success message to appear
    );

    if (successAlert) {
      const successText = await successAlert.textContent(); // Get the text content of the success message
      return (
        successText?.includes("Thank you for reaching out to Bushwise.") ??
        false
      );
    } else {
      return false;
    }
  }
}

export default ApplyPage;
