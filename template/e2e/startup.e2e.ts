import {expect} from "detox";

describe("Startup", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Should show loading component", async () => {
    await expect(element(by.id("SplashID"))).toBeVisible();
  });

  it("Is first run", async () => {
    await expect(element(by.id("OnboardingButtonID"))).toBeVisible();
    await element(by.id("OnboardingButtonID")).tap();
  });

  it("Should show tabs", async () => {
    await expect(element(by.id("MainPageID"))).toBeVisible();
  });
});
