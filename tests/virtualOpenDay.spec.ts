/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import VirtualOpenDayPage from "../pages/virtualOpenDay.page";
import { formTestData } from "../test-data/test-data";

test.describe("VirtualOpenDay", () => {
  let virtualOpenDayPage: VirtualOpenDayPage;

  // Set up the VirtualOpenDayPage instance and navigate to the page before each test
  test.beforeEach(async ({ page }) => {
    virtualOpenDayPage = new VirtualOpenDayPage(page);
    await virtualOpenDayPage.navigate();
  });

  // Test form submission and success message verification
  test.skip("Fill form and verify success message", async () => {
    const formData = formTestData;

    await virtualOpenDayPage.submitForm(formData);
    await virtualOpenDayPage.verifySuccessMessage();
  });
});
