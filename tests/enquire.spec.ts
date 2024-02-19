import { expect, test } from "@playwright/test";
import EnquirePage from "../pages/enquire.page";

test.describe("Enquire", () => {
  let enquirePage: EnquirePage;

  test.beforeEach(async ({ page }) => {
    enquirePage = new EnquirePage(page);
    await enquirePage.navigate();
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
      message: "This is just a test"
    };

    await enquirePage.submitForm(formData);

    expect(enquirePage.verifySuccessMessage).toBeTruthy();
  });
});
