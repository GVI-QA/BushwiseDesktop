/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import BasePage from "../pages/base/basePage.page";
import BushwiseRecruitmentPage from "../pages/bushwiseRecruitment.page";

test.describe("Bushwise Recruitment", () => {
  let bushwiseRecruitmentPage: BushwiseRecruitmentPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    bushwiseRecruitmentPage = new BushwiseRecruitmentPage(page);
    basePage = new BasePage(page);
    await bushwiseRecruitmentPage.navigateTo();
  });

  test("Navigate to Bushwise Employment Guarantee page via link and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => bushwiseRecruitmentPage.navigateToEmploymentGuaranteePageViaEnquireLink(),
      "Employment Guarantee | Get employed with Bushwise"
    );
  });

  test("Navigate to Bushwise Employment Guarantee page via Read more button and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => bushwiseRecruitmentPage.navigateToEmploymentGuaranteePageViaReadMoreBtn(),
      "Employment Guarantee | Get employed with Bushwise"
    );
  });

  test("Navigate to Enquire page verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => bushwiseRecruitmentPage.navigateToEnquirePage(),
      "Enquire today | Bushwise"
    );
  });
 
  test("Verify Industry first heading", async () => {
    await expect(bushwiseRecruitmentPage.industryFirstHeading).toHaveText(
      "Industry first in offering a free recruitment service"
    );
  });

  test("Verify How does it work heading", async () => {
    await expect(bushwiseRecruitmentPage.howItWorksHeading).toHaveText(
      "How does it work?"
    );
  });

  test("Verify The employment guarantee heading", async () => {
    await expect(bushwiseRecruitmentPage.employmentGuaranteeHeading).toHaveText(
      "The employment guarantee"
    );
  });
});