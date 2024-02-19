/* eslint-disable playwright/expect-expect */
import { test, expect } from "@playwright/test";
import ConservationWithGVIPage from "../pages/conservationWithGVI.page";
import BasePage from "../pages/base/basePage.page";

test.describe("Conversation with GVI", () => {
    let conversationWithGVI: ConservationWithGVIPage;
    let basePage: BasePage;

    test.beforeEach(async ({ page }) => {
        conversationWithGVI = new ConservationWithGVIPage(page);
        basePage = new BasePage(page);
        await conversationWithGVI.navigateTo();
    });

    test('Verify Conservation With GVI heading', async () => {
        await expect(conversationWithGVI.conservationWithGVIHeading).toHaveText(
            "Conservation with GVI"
        );
    });

    test('Verify GVI Limpopo heading', async () => {
        await expect(conversationWithGVI.gviLimpopoHeading).toHaveText(
            "GVI Limpopo"
        );
    });

    test('Verify GVI Wildlife Internships and Expeditions heading', async () => {
        await expect(conversationWithGVI.gviLimpopoHeading).toHaveText(
            "GVI Limpopo"
        );
    });

    test("Navigate to Wildlife Research in SA page and verify title", async () => {
        await basePage.navigateAndVerifyTitle(
            () => conversationWithGVI.navigateToWildlifeResearchSAPage(),
            "Wildlife Research in South Africa - Volunteer Expedition | GVI",
        );
    });

    test("Navigate to Wildlife Conservation Apprenticeship in SA page and verify title", async () => {
        await conversationWithGVI.navigateAndVerifyTitle(
            () => conversationWithGVI.navigateToWildlifeConservationApprenticeshipSAPage(),
            "Wildlife Conservation Apprenticeship in South Africa | GVI",
        );
    });

  test("Navigate to Big Cat Conservation Research in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToBigCatConservationResearchAPage(),
      "Big Cat Conservation Research in South Africa | GVI | GVI", 
    );
  });

  test("Navigate to Big Cat Conservation Internship in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToBigCatConservationInternshipAPage(),
      "Big Cat Conservation Internship in South Africa | GVI | GVI", 
    );
  });

  test("Navigate to Cheetah Conservation and Research Project in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToCheetahConversationAndResearchPage(),
      "Cheetah Conservation & Research Project South Africa - Volunteer Programs | GVI", 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 );
  });

  test("Navigate to Wildlife Conservation Internship in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToWildlifeConservationInternshipPage(),
      "Wildlife Conservation Internship in South Africa | GVI", 
      // 10000
    );
  });

  test("Navigate to Elephant, Rhino and Buffalo Research in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToElephantResearchPage(),
      "Elephant, Rhino and Buffalo Research and Conservation in South Africa | GVI | GVI", 
      // 10000
    );
  });

  test("Navigate to African Wildlife Conservation Teen Volunteering in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToWildlifConservationTeensVolunteeringPage(),
      "African Wildlife Conservation Teen Volunteering in South Africa | GVI | GVI", 
      // 10000
    );
  });

  test("Navigate to Rhino Poaching Awareness in SA page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToRhinoPoachingPage(),
      "Rhino Poaching Awareness in South Africa | GVI | GVI", 
      // 10000
    );
  });

  test("Navigate to Volunteer in Limpopo page and verify title", async () => {
    await conversationWithGVI.navigateAndVerifyTitle(
      () => conversationWithGVI.navigateToVolunteerInLimpopoPage(),
      "Limpopo, South Africa – Conservation Volunteer Opportunities | GVI",
      // 10000
      
    );
  });
});