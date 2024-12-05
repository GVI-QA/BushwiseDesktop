/* eslint-disable playwright/no-networkidle */
import { Page, Locator } from "@playwright/test";

class CoursesSubmenu {
  page: Page;
  courses: Locator;
  professionalSafariGuideCourse: Locator;
  professionalSafariGuideShortCourse: Locator;

  constructor(page: Page, environment: string) {
    this.page = page;
    this.courses = page.locator(
      "(//div[@class='itemDepth02233374943__container'])[1]"
    );
    if (environment === "southafrica") {
      this.professionalSafariGuideCourse = page.locator(
        "//span[contains(text(),'IFGA Safari Guide Course 6/12 months')]"
      );
    } else if (environment === "international") {
      this.professionalSafariGuideCourse = page.locator(
        "//span[contains(text(),'IFGA Safari Guide Course 6/12 months')]"
      );
    }
    this.professionalSafariGuideShortCourse = page.locator(
      "//span[contains(text(),'IFGA Safari Guide Short Course 2 months')]"
    );
  }

  async navigate() {
    await this.page.goto("/");
    await this.page.waitForLoadState("networkidle");
  }

  async navigateToCoursesPage() {
    await this.courses.click();
  }

  async navigateToProfessionalSafariGuideCoursePage() {
    await this.professionalSafariGuideCourse.click();
  }

  async navigateToProfessionalSafariGuideShortCoursePage() {
    await this.professionalSafariGuideShortCourse.click();
  }

  async hoverOverCourses() {
    await this.courses.hover();
  }
}

export default CoursesSubmenu;
