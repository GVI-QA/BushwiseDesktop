/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import EmploymentGuaranteePage from "../../../pages/employmentGuarentee.page";

test.describe.skip("Employment Guarantee", () => {
  let employmentGuaranteePage: EmploymentGuaranteePage;

  test.beforeEach(async ({ page }) => {
    employmentGuaranteePage = new EmploymentGuaranteePage(page);
    await employmentGuaranteePage.navigateTo();
  });

  test("Navigate to Field guide jobs page and verify title", async ({
    page,
  }) => {
    const environmentTitles = {
      southafrica: "Field Guide Jobs South Africa | Wildlife Jobs | Bushwise",
      international:
        "Safari Guide Jobs South Africa | Wildlife Jobs | Bushwise",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment] as string;

    await employmentGuaranteePage.navigateToFieldGuideJobsPage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 10000 });
  });

  test("Navigate to Professional Safari Guide Course page and verify title", async () => {
    const environmentTitles = {
      southafrica:
        "IFGA Professional Safari Guide Course | 6 or 12 month Course",
      international:
        "IFGA Professional Safari Guide Course | 6 or 12 month Course",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment] as string;

    const newPage =
      await employmentGuaranteePage.navigateToBushwiseProfessionalFieldGuidePage();
    await expect(newPage).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Verify Our unique offer heading", async () => {
    await expect(employmentGuaranteePage.ourUniqueOfferHeading).toHaveText(
      "Our unique offer"
    );
  });

  test("Navigate to Application page and verify title", async ({ page }) => {
    await employmentGuaranteePage.navigateToApplicationPage();
    await expect(page).toHaveTitle("Apply Now | Bushwise", { timeout: 10000 });
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
