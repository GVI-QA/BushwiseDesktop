/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import DownloadPage from "../pages/download.page";
import { formTestData } from "../test-data/test-data";

test.describe("Download", () => {
  let downloadPage: DownloadPage;

  // Set up the DownloadPage instance and navigate to the download page before each test
  test.beforeEach(async ({ page }) => {
    downloadPage = new DownloadPage(page);
    await downloadPage.navigate();
  });

  // Test form submission and success message verification
  test("Fill download form and verify success message", async () => {
    const formData = formTestData;

    await downloadPage.submitForm(formData);
    await downloadPage.verifySuccessMessage();
  });
});
