import { test, expect } from "@playwright/test";
import ExperiencesSubmenu from "../pages/menu/experiences.submenu";

test.describe("Experiences", () => {
  let experiencesSubmenu: ExperiencesSubmenu;

  test.beforeEach(async ({ page }) => {
    experiencesSubmenu = new ExperiencesSubmenu(page);
    await experiencesSubmenu.navigate();
  });

  test("Navigate to the Conservation with GVI page and verify title", async ({
    page,
  }) => {
    await experiencesSubmenu.hoverOverExperiences();
    await experiencesSubmenu.navigateToConservationWithGVIPage();
    await expect(page).toHaveTitle(
      "Top Wildlife Internships | GVI Limpopo South Africa", { timeout: 10000 }
    );
  });
});
