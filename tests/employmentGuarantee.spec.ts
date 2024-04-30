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
    const environmentTitles = {
      southafrica: "Field Guide Jobs South Africa | Wildlife Jobs | Bushwise",
      international:
        "Safari Guide Jobs South Africa | Wildlife Jobs | Bushwise",
    };
    const expectedTitle = environmentTitles[
      process.env.test_env || "sa"
    ] as string;
    await basePage.navigateAndVerifyTitle(
      () => employmentGuaranteePage.navigateToFieldGuideJobsPage(),
      expectedTitle
    );
  });

  test("Navigate to Bushwise Professional Field Guide course page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
        const newPage = await employmentGuaranteePage.navigateToBushwiseProfessionalFieldGuidePage();
        const title = await newPage.title();
        await expect(title).toContain("Professional Field Guide Course");
        return newPage;
    });
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
