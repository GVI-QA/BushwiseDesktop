import { test, expect } from "@playwright/test";
import Footer from "../pages/footer.page";

test.describe("Footer", () => {
  let footer: Footer;

  test.beforeEach(async ({ page }) => {
    footer = new Footer(page);
    await footer.navigate();
  });

  test("Navigate to Privacy Policy page and verify title", async ({
    page,
  }) => {
    await footer.navigateToPrivacyPolicyPage();
    await expect(page).toHaveTitle(
      "Privacy Policy | Bushwise"
    );
  });

  test("Navigate to Website Terms of Use page and verify title", async ({
    page,
  }) => {
    await footer.navigateToWebsiteTermsOfUsePage();
    await expect(page).toHaveTitle(
      "Website Terms of Use | Bushwise"
    );
  });

  test("Navigate to Terms of Service page and verify title", async ({
    page,
  }) => {
    await footer.navigateToTermsOfServicePage();
    await expect(page).toHaveTitle(
      "Terms of Service | Bushwise"
    );
  });

  test("Navigate to Download a Brochure page via the footer link and verify title", async ({
    page,
  }) => {
    await footer.navigateToDownloadABrochurePageViaLink();
    await expect(page).toHaveTitle(
      "Download our Brochure here | Bushwise", { timeout: 10000 }
    );
  });


});
