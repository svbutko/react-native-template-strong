---
sidebar_position: 3
title: Detox
---
## Content

Detox tests are e2e (end-to-end) tests which are testing your mobile app while running in a real device/simulator, interacting with it just like a real user.

To learn more about Detox, check [this page](https://github.com/wix/Detox).

All the tests are located in `e2e`.

Each created test file should follow the next template: `testName.e2e.ts`.

## Adding tests

See how you can add tests [here](https://github.com/wix/Detox/blob/master/docs/Introduction.WritingFirstTest.md#step-3-add-testids-to-your-app-to-assist-in-matching-elements).

There's already a simple test to check how well the initial running process works:

```typescript
import {expect} from "detox";

describe("Startup", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("Is first run", async () => {
    await expect(element(by.id("OnboardingButtonID"))).toBeVisible();
    await element(by.id("OnboardingButtonID")).tap();
  });

  it("Should show tabs", async () => {
    await expect(element(by.id("MainPageID"))).toExist();
  });
});

```

## Running tests

You can run your tests in `debug` and `release` environments.

Before running them you have to build them.

To do so do run the following scripts:

### iOS

For debug:
`npm run e2e:ios-debug`

For release:
`npm run e2e:build-ios-release`

To run the tests:

For debug:
`npm run e2e:ios-debug`

For release:
`npm run e2e:ios-release`

### Android

For debug:
`npm run e2e:build-android-debug`

For release:
`npm run e2e:build-android-release`

To run the tests:

For debug:
`npm run e2e:android-debug`

For release:
`npm run e2e:android-release`

## Changing devices

Initially the config is using emulators to run the tests on both iOS and Android:

```json
{
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 12 Pro"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_5_API_30"
      }
    }
  },
  "configurations": {
    "ios.emu.debug": {
      "device": "simulator",
      "app": "ios.debug"
    },
    "ios.emu.release": {
      "device": "simulator",
      "app": "ios.release"
    },
    "android.emu.debug": {
      "device": "emulator",
      "app": "android.debug"
    },
    "android.emu.release": {
      "device": "emulator",
      "app": "android.release"
    }
  }
}
```

You can change it by adding your own emulators or real devices.

Check [this page](https://github.com/wix/Detox/blob/master/docs/APIRef.Configuration.md#device-configurations) to see how it can be done.
