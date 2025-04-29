import { expect, test } from "@playwright/test";
import ApplyPage from "../../../pages/forms/forStudents/apply.page";
import { applyTestData } from "../../../test-data/test-data";

test.describe("Apply", () => {
  let applyPage: ApplyPage;

  test.beforeEach(async ({ page }) => {
    applyPage = new ApplyPage(page);
    await applyPage.navigate();
  });

  applyTestData.forEach(({ testName, formData }) => {
    test(`${testName}`, async () => {
      await applyPage.submitForm(formData);
      const isSuccess = await applyPage.verifySuccessMessage();
      expect(isSuccess).toBeTruthy();
    });
  });
});
