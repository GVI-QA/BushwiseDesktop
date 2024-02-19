/* eslint-disable playwright/expect-expect */
import { Page, test } from "@playwright/test";
import AboutSubmenu from "../pages/menu/about.submenu";
import BasePage from "../pages/base/basePage.page";

test.describe("About", () => {
  let aboutSubmenu: AboutSubmenu;
  let basePage: BasePage;
  let page: Page;

  test.beforeEach(async ({ page: _page }) => {
    page = _page;
    aboutSubmenu = new AboutSubmenu(page);
    basePage = new BasePage(page);
    await aboutSubmenu.navigate();
    await aboutSubmenu.hoverOverAbout();
  });

  test("Navigate to About Us page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToAboutUsPage();
    }, "Learn more about us | Bushwise");
  });

  test("Navigate to Our Story page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToOurStoryPage();
    }, "Read our story by our founder | Bushwise");
  });

  test("Navigate to IFGA page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToIFGAPage();
    }, "Learn More About The IFGA Qualification With Bushwise");
  });

  test("Navigate to Meet the Team page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToMeetTheTeamPage();
    }, "Meet our Skilled Bush Trainers | Bushwise");
  });

  test("Navigate to Why Bushwise page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToWhyBushwisePage();
    }, "Why Bushwise? | Learn About Exclusive Benefits");
  });

  test("Navigate to Events page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToEventsPage();
    }, "Virtual and In-Person Bushwise Events | Free Conservation Activities");
  });

  test("Navigate to Articles page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToArticlesPage();
    }, "Discover Nature's Wonders with Insightful Articles | Read Bushwise Blogs");
  });

  test("Navigate to Bushwise Campus page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToBushwiseCampusPage();
    }, "View our Bushwise Campus | Bushwise");
  });

  test("Navigate to Our Partners page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(async () => {
      return await aboutSubmenu.navigateToOurPartnersPage();
    }, "Read up on our partners | Bushwise");
  });
});
