/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import ContactUsRecruitmentPage from "../../../pages/forms/forLodges/contactUsRecruitment";
import {
  contactUsRecruitmentLodgesTestData,
  contactUsRecruitmentProfessionalsTestData,
} from "../../../test-data/test-data";

test.describe("Contact Us Recruitment", () => {
  let contactPage: ContactUsRecruitmentPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactUsRecruitmentPage(page);
    await contactPage.navigate();
  });

  test("Fill contact form for Lodges and verify success message", async () => {
    await contactPage.submitForm(contactUsRecruitmentLodgesTestData);
    await contactPage.verifySuccessMessage();
  });

  test("Fill contact form for Professionals and verify success message", async () => {
    await contactPage.submitForm(contactUsRecruitmentProfessionalsTestData);
    await contactPage.verifySuccessMessage();
  });
});
