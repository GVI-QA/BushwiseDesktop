import { Page, FrameLocator, Locator, expect } from "@playwright/test";
import { LodgeFormData } from "../../../test-data/test-data";

class LodgeFormPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  static iframeLocator = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[contains(text(), "Thank you for reaching out")]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator(LodgeFormPage.iframeLocator);
    this.successTextLocator = this.frame1.locator(
      LodgeFormPage.thankYouMessage
    );
  }

  async navigate(slug: string) {
    await this.page.goto(slug, { timeout: 60000 });

    // eslint-disable-next-line playwright/no-networkidle
    await this.page.waitForLoadState("networkidle", { timeout: 60000 });
    await this.scrollToForm();
    // eslint-disable-next-line playwright/no-wait-for-selector
    await this.page.waitForSelector(
      `iframe[name="${LodgeFormPage.iframeLocator}"]`,
      { state: "attached", timeout: 60000 }
    );
  }

  private async scrollToForm() {
    await this.page.evaluate(async () => {
      let totalHeight = document.body.scrollHeight;
      let currentPosition = window.scrollY;
      const step = 500;
      const delay = 200;

      while (currentPosition + window.innerHeight < totalHeight) {
        window.scrollBy(0, step);
        currentPosition += step;
        totalHeight = document.body.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    });
  }

  async submitForm(
    formData: LodgeFormData,
    hasRoleFields: boolean = false
  ): Promise<void> {
    const frame1 = this.page.frame(LodgeFormPage.iframeLocator);
    if (!frame1) throw new Error("Frame not found");

    await this.scrollToForm();

    // Fill common fields
    await frame1.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1.fill('input[placeholder="Surname*"]', formData.lastName);
    await frame1.fill('input[placeholder="Email*"]', formData.email);
    await frame1.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1.selectOption('select[name="country"]', {
      value: formData.country,
    });
    await frame1.fill('input[placeholder="Lodge Name*"]', formData.lodgeName);

    if (hasRoleFields && formData.roleLookingFor && formData.roleUrgency) {
      await frame1.fill(
        'input[placeholder="What role are you looking to fill?"]',
        formData.roleLookingFor
      );
      await frame1.selectOption('select[name="role_urgency"]', {
        value: formData.roleUrgency,
      });
    }
    await frame1.fill("textarea", formData.message);
    await frame1.click("input#newsletter_signup");

    // eslint-disable-next-line playwright/no-element-handle
    const submitButton = await frame1.$("button[type='submit']");
    await submitButton?.scrollIntoViewIfNeeded();
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  async verifySuccessMessage(): Promise<void> {
    const frame1 = this.page.frame(LodgeFormPage.iframeLocator);
    // eslint-disable-next-line playwright/no-wait-for-selector
    const successAlert = await frame1?.waitForSelector(
      LodgeFormPage.thankYouMessage,
      { state: "visible", timeout: 15000 }
    );

    expect(await successAlert?.textContent()).toContain(
      "Thank you for reaching out"
    );
  }
}

export default LodgeFormPage;
