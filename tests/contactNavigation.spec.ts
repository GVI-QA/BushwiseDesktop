/* eslint-disable playwright/expect-expect */
import { test, Page } from "@playwright/test";
import ContactSubmenu from "../pages/menu/contact.submenu";
import BasePage from "../pages/base/basePage.page";

test.describe("Contact", () => {
  let contactSubmenu: ContactSubmenu;
  let basePage: BasePage;
  let page: Page;

  test.beforeEach(async ({ page: _page }) => {
    page = _page;
    basePage = new BasePage(page);
    contactSubmenu = new ContactSubmenu(page);
    await contactSubmenu.navigate();
  });

  test("Navigate to Contact page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => 
    await contactSubmenu.navigateToContactPage(),
      "Contact us today | Bushwise"
    );
  });
});
