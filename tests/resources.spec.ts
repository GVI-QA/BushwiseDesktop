import { test, expect } from "@playwright/test";
import ResourcesSubmenu from "../pages/menu/resources.submenu";

test.describe("Resources", () => {
  let resourcesSubmenu: ResourcesSubmenu;

  test.beforeEach(async ({ page }) => {
    resourcesSubmenu = new ResourcesSubmenu(page);
    await resourcesSubmenu.navigate();
    await resourcesSubmenu.hoverOverResources();
  });

  test("Navigate to Download our Brochure page and verify title", async ({ page }) => {
    const environmentTitles = {
      southafrica: "Download our Informative Brochure | Bushwise Field Guides",
      international: "Download our Brochure here | Bushwise",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment];

    await resourcesSubmenu.navigateToDownloadABrochurPage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Navigate to Refer A Friend page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToReferAFriendPage();
    await expect(page).toHaveTitle(
      "Refer a student & earn cash rewards | Bushwise",
      { timeout: 20000 }
    );
  });

  test("Navigate to FAQs page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToFAQstPage();
    await expect(page).toHaveTitle("Frequently Asked Questions | Bushwise", {
      timeout: 20000,
    });
  });

  test("Navigate to Parent Guide page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToParentGuidePage();
    await expect(page).toHaveTitle("A parent's guide to Bushwise", {
      timeout: 20000,
    });
  });

  test("Navigate to Financial Aid page and verify title", async ({ page }) => {
    const environmentTitles = {
      southafrica: "Claim Financial aid | Bushwise",
      international: "Your Best Financial Aid Options For Bushwise Courses",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment];

    await resourcesSubmenu.navigateToFinancialAidPage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Navigate to CATHSSETA Accreditation page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToCATHSSETAAccreditationPage();
    await expect(page).toHaveTitle(
      "Leading CATHSSETA Accredited Training Provider | Bushwise",
      { timeout: 30000 }
    );
  });

  test("Navigate to Bushwise Videos page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToBushwiseVideoGalleryPage();
    await expect(page).toHaveTitle("Watch our Video Gallery | Bushwise", {
      timeout: 30000,
    });
  });

  test("Navigate to Bushwise Media page and verify title", async ({ page }) => {
    await resourcesSubmenu.navigateToBushwiseMediaPage();
    await expect(page).toHaveTitle(
      "Special features and announcements | Bushwise in the news",
      { timeout: 30000 }
    );
  });
});
