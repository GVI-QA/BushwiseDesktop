/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import BasePage from "../pages/base/basePage.page";
import EmploymentGuaranteePage from "../pages/employmentGuarentee.page";

test.describe("Employment Guarantee", () => {
  let employmentGuaranteePage: EmploymentGuaranteePage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    employmentGuaranteePage = new EmploymentGuaranteePage(page);
    basePage = new BasePage(page);
    await employmentGuaranteePage.navigateTo();
  });

  test("Navigate to Field guide jobs page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => employmentGuaranteePage.navigateToFieldGuideJobsPage(),
      "Field Guide Jobs South Africa | Wildlife Jobs | Bushwise"
    );
  });

  test("Navigate to Bushwise Professional Field Guide course page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => employmentGuaranteePage.navigateToBushwiseProfessionalFieldGuidePage(),
      "Professional Field Guide Course | 23 or 50 Week Course"
    );
  });

  test("Verify Our unique offer heading", async () => {
    await expect(employmentGuaranteePage.ourUniqueOfferHeading).toHaveText(
      "Our unique offer"
    );
  });

  test("Navigate to Application page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => employmentGuaranteePage.navigateToApplicationPage(),
      "Apply Now | Bushwise"
    );
  });

  test("Verify Your money back heading", async () => {
    await expect(employmentGuaranteePage.yourMoneyBackHeading).toHaveText(
      "Your money back"
    );
  });

  test("Verify How it works heading", async () => {
    await expect(employmentGuaranteePage.howItWorksHeading).toHaveText(
      "How it works"
    );
  });

  test("Verify Our Alumni heading", async () => {
    await expect(employmentGuaranteePage.ourAlumniHeading).toHaveText(
      "Our Alumni"
    );
    await expect(employmentGuaranteePage.testimonials).toBeVisible();
  });

});