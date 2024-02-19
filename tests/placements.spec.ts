/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import BasePage from "../pages/base/basePage.page";
import PlacementsPage from "../pages/placements.page";

test.describe("Placements", () => {
  let placementsPage: PlacementsPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    placementsPage = new PlacementsPage(page);
    basePage = new BasePage(page);
    await placementsPage.navigateTo();
  });

  test("Verify Prestigious lodges and Reserves heading", async () => {
    await expect(placementsPage.placementsLodgesHeading).toHaveText(
      "Placements at prestigious lodges and reserves in South Africa"
    );
  });

  test("Verify Placement locations heading", async () => {
    await expect(placementsPage.placementLocationsHeading).toHaveText(
      "locations"
    );
  });

  test("Verify Hear from our students and staff heading", async () => {
    await expect(placementsPage.hearFromStudentsAndStaffHeading).toHaveText(
      "Hear from"
    );
  });

  test("Verify Bushwise placements heading", async () => {
    await expect(placementsPage.bushwisePlacementsHeading).toHaveText(
      "Bushwise placements"
    );
  });

  test("Navigate to Bushwise Professional Field Guide course page and verify title", async () => {
    await basePage.navigateAndVerifyTitle(
      () => placementsPage.navigateToBushwiseProfessionalFieldGuidePage(),
      "Professional Field Guide Course | 23 or 50 Week Course"
    );
  });

  test("Verify Kapama River Lodge sub-heading", async () => {
    await expect(placementsPage.kapamaRiverLodge).toHaveText(
      "Kapama River Lodge"
    );
  });

  test("Verify Lowveld Trails Co. sub-heading", async () => {
    await expect(placementsPage.lowveldTrailsCo).toHaveText(
      "Lowveld Trails Co."
    );
  });

  test("Verify Siyafunda sub-heading", async () => {
    await expect(placementsPage.siyafunda).toHaveText("Siyafunda");
  });

  test("Verify Garonga Safari Camp sub-heading", async () => {
    await expect(placementsPage.gorongaSafariCamp).toHaveText(
      "Garonga Safari Camp"
    );
  });

  test("Verify Rukiya Safari Camp sub-heading", async () => {
    await expect(placementsPage.rukiyaSafariCamp).toHaveText(
      "Rukiya Safari Camp"
    );
  });

  test("Verify Africa on Foot sub-heading", async () => {
    await expect(placementsPage.africaonFoot).toHaveText("Africa on Foot");
  });

  test("Verify Bundox Safari Lodge sub-heading", async () => {
    await expect(placementsPage.bundoxSafariLodge).toHaveText("Bundox Safari");
  });

  test("Verify Harnas Wildlife Foundation sub-heading", async () => {
    await expect(placementsPage.harnasWildlifeFoundation).toHaveText(
      "Harnas Wildlife"
    );
  });

  test("Verify Moholoholo Rehab Centre sub-heading", async () => {
    await expect(placementsPage.moholoholoRehabCentre).toHaveText(
      "Moholoholo Rehab"
    );
  });

  test("Verify NYATI Safari Lodge sub-heading", async () => {
    await expect(placementsPage.nyatiSafariLodge).toHaveText(
      "NYATI Safari Lodge"
    );
  });

  test("Verify K9 conservation sub-heading", async () => {
    await expect(placementsPage.k9Conservation).toHaveText("K9 Conservation");
  });

  test("Verify GVI Limpopo sub-heading", async () => {
    await expect(placementsPage.gviLimpopo).toHaveText("GVI Limpopo");
  });

  test("Verify LEO Africa sub-heading", async () => {
    await expect(placementsPage.leoAfrica).toHaveText("LEO Africa");
  });

  test("Verify Makalali Reserve sub-heading", async () => {
    await expect(placementsPage.makalaliReserve).toHaveText("Makalali Reserve");
  });
});
