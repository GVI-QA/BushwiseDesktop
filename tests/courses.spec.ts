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
    await expect(page).toHaveTitle(
      "Wildlife Courses | Study Wildlife in South Africa", { timeout: 10000 }
    );
  });

  test("Navigate to the Professional Field Guide Course page and verify title", async ({
    page,
  }) => {
    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToProfessionalFieldGuidingPage();
    await expect(page).toHaveTitle(
      "Professional Field Guide Course | 23 or 50 Week Course", { timeout: 10000 }
    );
  });

  test("Navigate to the 60-day Safari Guide Course page and verify title", async ({
    page,
  }) => {
    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToSixtyDaySafariPage();
    await expect(page).toHaveTitle(
      "Safari Guide Course | 60 Days to Study Wildlife", { timeout: 10000 }
    );
  });
});
