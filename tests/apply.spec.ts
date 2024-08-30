import { expect, test } from "@playwright/test";
import ApplyPage from "../pages/apply.page";
import { applyTestData } from "../test-data/test-data";

test.describe("Apply", () => {
  let applyPage: ApplyPage;

  // Run before each test to set up the ApplyPage instance and navigate to the form page
  test.beforeEach(async ({ page }) => {
    applyPage = new ApplyPage(page);
    await applyPage.navigate();
    
    // Wait for the page to be in a network idle state, indicating all resources have loaded
    // eslint-disable-next-line playwright/no-networkidle
    await page.waitForLoadState('networkidle');
  });

  // Iterate over each test case in the applyTestData array
  applyTestData.forEach(({ testName, formData }) => {
    // Define a test for each data set
    test(`${testName}`, async () => {
      await applyPage.submitForm(formData); // Submit the form with the given data

      const isSuccess = await applyPage.verifySuccessMessage(); // Check for success message
      expect(isSuccess).toBeTruthy(); // Verify that the success message is displayed
    });
  });
});
