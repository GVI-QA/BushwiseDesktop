import { Page, FrameLocator, Locator } from "@playwright/test";

class ApplyPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(ApplyPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(ApplyPage.thankYouMessage);
  }

  // Navigate to the apply page and handle scrolling
  async navigate() {
    await this.page.goto("/apply-now", { timeout: 60000 });

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
        totalHeight = document.body.scrollHeight; // Update total height in case new content loads
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    });

    // Wait for the iframe to be fully loaded and attached
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${ApplyPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );
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
    const frame1 = this.page.frame(ApplyPage.iframeLocator);

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

    // Optionally fill additional fields
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

    // Handle grantValue field if provided
    if (formData.grantValue) {
      const grantValueExists = await frame1!.$('select[name="grant_value"]');
      if (grantValueExists) {
        await frame1!.selectOption('select[name="grant_value"]', {
          value: formData.grantValue,
        });

        // Click additional funding source options
        await frame1!.click("input#personal_savings");
        await frame1!.click("input#parents-or-caregivers");
        await frame1!.click("input#personal-loans");
        await frame1!.click("input#inheritance");
        await frame1!.click("input#fundraising");
      }
    }

    // Fill out the remaining fields and submit the form
    await frame1!.selectOption('select[name="dob_y"]', {
      value: formData.birthYear,
    });
    await frame1!.fill("textarea", formData.message);

    await frame1!.click("input#tc_agree");
    await frame1!.click("input#newsletter_signup");

    // Submit the form by clicking the submit button twice
    const submitButton = await frame1!.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  // Verify if the success message is displayed
  async verifySuccessMessage(): Promise<boolean> {
    const frame1 = this.page.frame(ApplyPage.iframeLocator);
    const successAlert = await frame1!.waitForSelector(
      ApplyPage.thankYouMessage,
      { state: "visible", timeout: 10000 }
    );

    if (successAlert) {
      const successText = await successAlert.textContent();
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
