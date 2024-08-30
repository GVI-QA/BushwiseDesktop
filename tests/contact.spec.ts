/* eslint-disable playwright/expect-expect */
import { test } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { contactFormTestData } from "../test-data/test-data";

test.describe("Contact", () => {
  let contactPage: ContactPage;

  // Set up the ContactPage instance and navigate to the contact page before each test
  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  // Test form submission and success message verification
  test("Fill contact form and verify success message", async () => {
    const formData = contactFormTestData;

    await contactPage.submitForm(formData);
    await contactPage.verifySuccessMessage();
  });
});
