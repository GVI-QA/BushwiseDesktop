/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import CampusOpenDayPage from "../pages/campusOpenDay.page";
import { formTestData } from "../test-data/test-data";

test.describe("CampusOpenDay", () => {
  let campusOpenDayPage: CampusOpenDayPage;

  // Set up the CampusOpenDayPage instance and navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    campusOpenDayPage = new CampusOpenDayPage(page);
    await campusOpenDayPage.navigate();
  });

  // Test form submission and success message verification
  test.skip("Fill contact form and verify success message", async () => {
    const formData = formTestData;

    await campusOpenDayPage.submitForm(formData); 
    await campusOpenDayPage.verifySuccessMessage();
  });
});
