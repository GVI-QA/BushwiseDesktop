/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import PlacementsPage from "../pages/placements.page";

test.describe("Placements", () => {
  let placementsPage: PlacementsPage;

  test.beforeEach(async ({ page }) => {
    const environment = process.env.test_env || "southafrica";
    placementsPage = new PlacementsPage(page, environment);
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

  test("Navigate to Professional Safari Guide Course page and verify title", async ({ page }) => {
    const environmentTitles = {
      southafrica: "IFGA Professional Safari Guide Course | 6 or 12 month Course",
      international: "IFGA Professional Safari Guide Course | 6 or 12 month Course",
    };
    const environment = process.env.test_env || "southafrica";
    const expectedTitle = environmentTitles[environment];

    await placementsPage.navigateToBushwiseProfessionalFieldGuidePage();
    await expect(page).toHaveTitle(expectedTitle, { timeout: 20000 });
  });

  test("Verify Kapama River Lodge sub-heading", async () => {
    await expect(placementsPage.kapamaRiverLodge).toHaveText(
      "Kapama River Lodge"
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
    await expect(placementsPage.moholoholoRehabCentre).toContainText("Moholoholo Rehab");
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
