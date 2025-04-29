/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import ContactUsPage from "../../../pages/forms/forStudents/contactUs.page";
import { contactFormTestData } from "../../../test-data/test-data";

test.describe("Contact", () => {
  let contactUsPage: ContactUsPage;

  // Set up the ContactPage instance and navigate to the contact page before each test
  test.beforeEach(async ({ page }) => {
    contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigate();
  });

  // Test form submission and success message verification
  test("Fill contact form and verify success message", async () => {
    const formData = contactFormTestData;

    await contactUsPage.submitForm(formData);
    await contactUsPage.verifySuccessMessage();
  });
});
