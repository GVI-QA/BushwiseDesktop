import { Page, FrameLocator, Locator, expect } from "@playwright/test";

class FormComponent {
  page: Page;
  protected frame1: FrameLocator;
  protected successTextLocator: Locator;
  protected iframeLocator: string;
  protected successMessageLocator: string;

  constructor(page: Page) {
    this.page = page;
    this.iframeLocator = "htmlComp-iframe";
    this.successMessageLocator = '//h1[normalize-space()="Thank you for reaching out to Bushwise."]'
    this.frame1 = page.frameLocator(this.iframeLocator);
    this.successTextLocator = this.frame1.locator(this.successMessageLocator);
  }

  async submitForm(formData: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    country: string,
    message?: string,
    course?: string,
    date?: string,
    birthDay?: string,
    birthMonth?: string,
    birthYear?: string
  }): Promise<void> {
    const frame1 = await this.page.frame(this.iframeLocator);

    await frame1!.fill('input[placeholder="First Name*"]', formData.firstName);
    await frame1!.fill('input[placeholder="Last Name*"]', formData.lastName);
    await frame1!.fill('input[placeholder="Email*"]', formData.email);
    await frame1!.fill('input[placeholder="Phone*"]', formData.phone);
    await frame1!.selectOption('select[name="country"]', { value: formData.country });

    if (formData.message) await frame1!.fill("textarea", formData.message);
    if (formData.course) await frame1!.selectOption('select[name="course"]', { value: formData.course });
    if (formData.date) await frame1!.selectOption('select[name="departure_date"]', { value: formData.date });
    if (formData.birthDay) await frame1!.selectOption('select[name="dob_d"]', { value: formData.birthDay });
    if (formData.birthMonth) await frame1!.selectOption('select[name="dob_m"]', { value: formData.birthMonth });
    if (formData.birthYear) await frame1!.selectOption('select[name="dob_y"]', { value: formData.birthYear });

    await frame1!.click("input#tc_agree");
    await frame1!.click("input#newsletter_signup");

    const submitButton = await frame1!.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }

  async verifySuccessMessage(): Promise<void> {
    await this.successTextLocator.waitFor({ state: "visible" });
    const successMessage = await this.successTextLocator.innerText();
    expect(successMessage).toContain("Thank you for reaching out to Bushwise.");
  }
}

export default FormComponent;
