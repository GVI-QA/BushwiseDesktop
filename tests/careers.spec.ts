/* eslint-disable playwright/expect-expect */
import { test, Page } from "@playwright/test";
import CareersSubmenu from "../pages/menu/careers.submenu";
import BasePage from "../pages/base/basePage.page";

test.describe("Careers", () => {
  let careersSubmenu: CareersSubmenu;
  let basePage: BasePage;
  let page: Page;

  test.beforeEach(async ({ page: _page }) => {
    page = _page;
    careersSubmenu = new CareersSubmenu(page);
    basePage = new BasePage(page);
    await careersSubmenu.navigate();
    await careersSubmenu.hoverOverCareers();
  });

  test("Navigate to the Placements page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => await 
    careersSubmenu.navigateToPlacementsPage(), 
    "View our Job Placements | Bushwise");
  });

  test("Navigate to the Employment Guarantee page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => 
    await careersSubmenu.navigateToEmploymentGuaranteePage(), 
    "Employment Guarantee | Get employed with Bushwise");
  });

  test("Navigate to the Bushwise Recruitment page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => await 
    careersSubmenu.navigateToBushwiseRecruitmentPage(), 
    "Claim your job recruitment benefit | Bushwise");
  });

  test("Navigate to the Bushwise Alumni Stories page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => await 
    careersSubmenu.navigateToAlumniStoriesPage(), 
    "Bushwise Alumni Stories | Amazing Tales From Our Graduates");
  });

  test("Navigate to the Wildlife Jobs page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => await 
    careersSubmenu.navigateToWildlifeJobsPage(), 
    "Wildlife Jobs 2023 | Find Your Ultimate Conservation Career");
  });
});
