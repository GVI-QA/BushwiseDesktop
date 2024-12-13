import { expect, test } from "@playwright/test";
import ApplyPage from "../pages/apply.page";
import { applyTestData } from "../test-data/test-data";

test.describe("Apply", () => {
  let applyPage: ApplyPage;

  // Set up the ApplyPage instance and navigate to the form page before each test
  test.beforeEach(async ({ page }) => {
    applyPage = new ApplyPage(page);
    await applyPage.navigate();
  });

  // Define a test for each data set in applyTestData
  applyTestData.forEach(({ testName, formData }) => {
    test(`${testName}`, async () => {
      // await page.pause();

      await applyPage.submitForm(formData);
      const isSuccess = await applyPage.verifySuccessMessage();
      expect(isSuccess).toBeTruthy();
    });
  });
});
