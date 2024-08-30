/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import EnquirePage from "../pages/enquire.page";
import { enquireTestData } from "../test-data/test-data";

test.describe("Enquire", () => {
  let enquirePage: EnquirePage;

  // Set up the EnquirePage instance and navigate to the enquire page before each test
  test.beforeEach(async ({ page }) => {
    enquirePage = new EnquirePage(page);
    await enquirePage.navigate();
  });

  // Generate a test for each enquiry data
  enquireTestData.forEach(({ testName, formData }) => {
    test(`${testName}`, async () => {
      await enquirePage.submitForm(formData);
      await enquirePage.verifySuccessMessage();
    });
  });
});
