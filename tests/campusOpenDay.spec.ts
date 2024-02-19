import { expect, test } from "@playwright/test";
import CampusOpenDayPage from "../pages/campusOpenDay.page";

test.describe("CampusOpenDay", () => {
  let campusOpenDayPage: CampusOpenDayPage;

  test.beforeEach(async ({ page }) => {
    campusOpenDayPage = new CampusOpenDayPage(page);
    await campusOpenDayPage.navigate();
    await page.waitForTimeout(8000);
  });

  test("Fill contact form and verify success message", async () => {

    const formData = {
      firstName: "Automated",
      lastName: "Test",
      email: "automatedtest@gviprograms.com",
      phone: "07123456789",
      country: "United Kingdom"
    };

    await campusOpenDayPage.submitForm(formData);

    expect(campusOpenDayPage.verifySuccessMessage).toBeTruthy();
  });
});
