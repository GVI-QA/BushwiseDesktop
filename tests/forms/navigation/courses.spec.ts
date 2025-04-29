import { test, expect } from "@playwright/test";
import CoursesSubmenu from "../../../pages/menu/courses.submenu";
// import { env } from "process";

test.describe.skip("Courses", () => {
  let coursesSubmenu: CoursesSubmenu;

  test.beforeEach(async ({ page }) => {
    const environment = process.env.test_env || "southafrica";
    coursesSubmenu = new CoursesSubmenu(page, environment);
    await coursesSubmenu.navigate();
  });

  test("Navigate to the Wildlife Courses page and verify title", async ({
    page,
  }) => {
    await coursesSubmenu.navigateToCoursesPage();
    await expect(page).toHaveTitle(
      "Wildlife Courses | Study Wildlife in South Africa",
      { timeout: 10000 }
    );
  });

  test("Navigate to the Professional Safari Guide Course page and verify title", async ({
    page,
  }) => {
    const environmentTitles = {
      southafrica:
        "IFGA Professional Safari Guide Course | 6 or 12 month Course",
      international:
        "IFGA Professional Safari Guide Course | 6 or 12 month Course",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment] as string;

    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToProfessionalSafariGuideCoursePage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Navigate to the Professional Safari Guide Short Course page and verify title", async ({
    page,
  }) => {
    const environmentTitles = {
      southafrica:
        "IFGA Professional Safari Guide Short course | 2 months to Study Wildlife ",
      international:
        "IFGA Professional Safari Guide Short course | 2 months to Study Wildlife ",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment] as string;

    await coursesSubmenu.hoverOverCourses();
    await coursesSubmenu.navigateToProfessionalSafariGuideShortCoursePage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });
});
