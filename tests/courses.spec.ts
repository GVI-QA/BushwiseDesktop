import { test, expect } from "@playwright/test";
import CoursesSubmenu from "../pages/menu/courses.submenu";

test.describe("Courses", () => {
  let coursesSubmenu: CoursesSubmenu;

  test.beforeEach(async ({ page }) => {
    coursesSubmenu = new CoursesSubmenu(page);
    await coursesSubmenu.navigate();
  });

  test("Navigate to the Wildlife Courses page and verify title", async ({ page }) => {
    await coursesSubmenu.navigateToCoursesPage();
    await expect(page).toHaveTitle("Wildlife Courses | Study Wildlife in South Africa", { timeout: 10000 });
  });

  test("Navigate to the Professional Field Guide Course page and verify title", async ({ page }) => {
    const environmentTitles = {
      southafrica: "Professional Field Guide Course | 6 or 12 month Course",
      international: "Professional Field Guide Course | 23 or 50 Week Course",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment] as string;

    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToProfessionalFieldGuidingPage();
    // Wait until the correct title is present
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Navigate to the 60-day Safari Guide Course page and verify title", async ({ page }) => {
    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToSixtyDaySafariPage();
    await expect(page).toHaveTitle("Safari Guide Course | 60 Days to Study Wildlife", { timeout: 10000 });
  });
});
