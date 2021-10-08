---
sidebar_position: 1
title: Jest
---
## Content

Jest tests are simple and target mostly API communication and methods and functions stability and correctness of execution.

To learn more about Jest, check [this page](https://jestjs.io).

All the tests are located in `__tests__`.

Each created test file should follow the next template: `testName.test.ts`.

## Adding tests

To add a test, create a file by following previously mentioned template.

Describe your tests like so (I'll use localization as example):

```typescript
describe("Localization", () => {

});
```

And add tests itself:

```typescript
  test("Current language: EN", () => {
    expect(getLanguage()).toBe("en");
  });

  test("Current interface language: EN", () => {
    expect(getInterfaceLanguage()).toBe("en");
  });

  test("Set empty language", () => {
    setLanguage();
    expect(getLanguage()).toBe("en");
  });

  test("Set language: EN", () => {
    setLanguage(Languages.en);
    expect(getLanguage()).toBe("en");
  });
```

## Running tests

You can run individual tests while debugging them in your IDE or if you want to run every single described test you can simply run:
`npm run tests`. Which will show you `PASSSED` and `FAILED` tests.

## Mocks

Some dependencies or environments require you to be mocked since tests are not running in React Native environment but NodeJS.

For these cases there is a folder called `__mocks__`.

There's already a simple mock of `Localization`:

```js
import LocalizedStringsCore from "react-localization";

function getInterfaceLanguage() {
  return "en";
}

export default class LocalizedStrings extends LocalizedStringsCore {
  constructor(props) {
    super(props, getInterfaceLanguage);
  }
}
```

It defines that default and used language will be English without trying to get it from the system.

Then this mock is "imported" or better to say "mocked" in `__tests__/localization.test.ts`:

```typescript
jest.mock("react-native-localization");
```

## Coverage

To check how well you covered files with test you can see it using coverage.

Run `npm run tests:coverage`.

The `coverege` folder will appear which will give you HTML pages with detailed information, also there will be a print into terminal after the command will be executed.
