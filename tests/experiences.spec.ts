import { test, expect } from "@playwright/test";
import ExperiencesSubmenu from "../pages/menu/experiences.submenu";

const environmentTitles = {
  international: "Top Wildlife Internships Abroad | GVI South Africa",
  southafrica: "Top Wildlife Internships | GVI Limpopo South Africa",
};

test.describe("Experiences", () => {
  let experiencesSubmenu: ExperiencesSubmenu;

  test.beforeEach(async ({ page }) => {
    experiencesSubmenu = new ExperiencesSubmenu(page);
    await experiencesSubmenu.navigate();
  });

  test("Navigate to the Conservation with GVI page and verify title", async ({
    page,
  }) => {
    await experiencesSubmenu.navigateToConservationWithGVIPage();
    const expectedTitle = environmentTitles[process.env.test_env || 'sa'] as string;
    await expect(page).toHaveTitle(expectedTitle, { timeout: 10000 });
  });
});
