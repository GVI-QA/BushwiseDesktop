import { expect, test } from "@playwright/test";
import ContactPage from "../pages/contact.page";

test.describe("Contact", () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
    await page.waitForTimeout(5000);
  });

  test("Fill contact form and verify success message", async () => {

    const formData = {
      firstName: "Automated",
      lastName: "Test",
      email: "automatedtest@gviprograms.com",
      phone: "07123456789",
      country: "United Kingdom",
      message: "This is just a test"
    };

    await contactPage.submitForm(formData);

    expect(contactPage.verifySuccessMessage).toBeTruthy();
  });
});
