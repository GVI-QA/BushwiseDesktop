import { expect, test } from "@playwright/test";
import VirtualOpenDayPage from "../pages/virtualOpenDay.page";

test.describe("VirtualOpenDay", () => {
  let virtualOpenDayPage: VirtualOpenDayPage;

  test.beforeEach(async ({ page }) => {
    virtualOpenDayPage = new VirtualOpenDayPage(page);
    await virtualOpenDayPage.navigate();
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

    await virtualOpenDayPage.submitForm(formData);

    expect(virtualOpenDayPage.verifySuccessMessage).toBeTruthy();
  });
});
