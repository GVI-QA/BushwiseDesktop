import { expect, test } from "@playwright/test";
import DownloadPage from "../pages/download.page";

test.describe("Download", () => {
  let downloadPage: DownloadPage;

  test.beforeEach(async ({ page }) => {
    downloadPage = new DownloadPage(page);
    await downloadPage.navigate();
    await page.waitForTimeout(5000);
  });

  test("Fill contact form and verify success message", async () => {

    const formData = {
      firstName: "Automated",
      lastName: "Test",
      email: "automatedtest@gviprograms.com",
      phone: "07123456789",
      country: "United Kingdom"
    };

    await downloadPage.submitForm(formData);

    expect(downloadPage.verifySuccessMessage).toBeTruthy();
  });
});