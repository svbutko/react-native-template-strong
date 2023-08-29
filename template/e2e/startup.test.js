describe('Startup', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Onboarding navigation', async () => {
    await expect(element(by.id('OnboardingButtonID'))).toBeVisible();
    await element(by.id('OnboardingButtonID')).longPress();
    await expect(element(by.id('MainPageID'))).toBeVisible(35);
  });
});
