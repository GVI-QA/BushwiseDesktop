import { expect, test } from "@playwright/test";
import ApplyPage from "../pages/apply.page";

test.describe("Apply", () => {
  let applyPage: ApplyPage;

  test.beforeEach(async ({ page }) => {
    applyPage = new ApplyPage(page);
    await applyPage.navigate();
    await page.waitForTimeout(5000);
  });

  test("Fill contact form and verify success message", async () => {

    const formData = {
      firstName: "Automated",
      lastName: "Test",
      email: "automatedtest@gviprograms.com",
      phone: "07123456789",
      country: "United Kingdom",
      course: "ZABF0039N",
      date: "2025-07-08",
      birthDay: "5",
      birthMonth: "2",
      birthYear: "1990",
      message: "This is just a test"
    };

    await applyPage.submitForm(formData);

    expect(applyPage.verifySuccessMessage).toBeTruthy();
  });
});
