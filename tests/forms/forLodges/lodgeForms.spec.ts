/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import LodgeFormPage from "../../../pages/forms/forLodges/lodgeForm";
import {
  lodgeFormSlugs,
  baseLodgeFormData,
} from "../../../test-data/test-data";

test.describe("Lodge Forms", () => {
  let lodgeFormPage: LodgeFormPage;

  test.beforeEach(async ({ page }) => {
    lodgeFormPage = new LodgeFormPage(page);
  });

  for (const { path, hasRoleFields } of lodgeFormSlugs) {
    test(`Test form submission for ${path}`, async () => {
      await lodgeFormPage.navigate(path);
      await lodgeFormPage.submitForm(baseLodgeFormData, hasRoleFields);
      await lodgeFormPage.verifySuccessMessage();
    });
  }
});
