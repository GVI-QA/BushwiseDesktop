import { test, expect } from "@playwright/test";
import OnlineCoursesSubmenu from "../pages/menu/onlineCourses.submenu";

test.describe("OnlineCourses", () => {
  let onlineCoursesSubmenu: OnlineCoursesSubmenu;

  test.beforeEach(async ({ page }) => {
    onlineCoursesSubmenu = new OnlineCoursesSubmenu(page);
    await onlineCoursesSubmenu.navigate();
  });

  test("Navigate to the Online Courses page and verify title", async ({ page }) => {
    await onlineCoursesSubmenu.navigateToOnlineCoursesPage();
    await expect(page).toHaveTitle(
      "Online Wildlife Courses | Study Wildlife and Field Guiding Online",
      { timeout: 10000 }
    );
  });

  test("Navigate to the Bushwise Field Guiding Online Course page and verify title", async ({ page }) => {
    await onlineCoursesSubmenu.hoverOverOnlineCourses();
    await onlineCoursesSubmenu.navigateToFGASAFieldGuidingOnlineCoursePage();
    await expect(page).toHaveTitle(
      "Bushwise Field Guide Online | Top Conservation Online Course",
      { timeout: 10000 }
    );
  });

  test("Navigate to the Nature Enthusiast Online Course page and verify titles", async ({ page }) => {
    const environmentTitles = {
      southafrica: "Bushwise Nature Enthusiast | Top Online Wildlife Course",
      international: "Bushwise Nature Enthusiast | Study Wildlife Online ",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment];

    await onlineCoursesSubmenu.hoverOverOnlineCourses();
    await onlineCoursesSubmenu.navigateToNatureEnthusiastOnlineCoursePage();
    // Wait until the correct title is present
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Navigate to the Introduction to Field Guiding Online Course page and verify title", async ({ page }) => {
    await onlineCoursesSubmenu.hoverOverOnlineCourses();
    await onlineCoursesSubmenu.navigateToIntroductionToFieldGuidingOnlineCoursesPage();
    await expect(page).toHaveTitle(
      "Introduction to Field Guiding | Study Field Guiding Online",
      { timeout: 10000 }
    );
  });
});
