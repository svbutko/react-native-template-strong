---
sidebar_position: 4
title: Date formatter
---

## Content

Contains date converters and date formatters based on current language.

- `DateFormat` - enum of possible formats you can use (you can add you own)
- `dateFromString` - tries to convert string represented as date to `Date`
- `dateFromUnknown` - tries to convert any type possibly represented as date to `Date`
- `dateFromFormat` - takes date and format and returns the formatted string
- `calendarDate` - takes date and formats it to calendar (tomorrow, yesterday, today etc.) date and returns the formatted string
- `getUnixDate` - returns given date as `unix` number
- `getInitialDate` - takes the date if it exists and returns it otherwise if the date is equal to null returns `defaultDate` or current date

## Usage

`dateFromString`:
```typescript
dateFromString("2021-10-01");
//2021-10-01T00:00:00.000Z as Date
```

`dateFromUnknown`:
```typescript
dateFromUnknown(1234567891011);
//2009-02-13T23:31:31.011Z as Date
```

`dateFromFormat`:
```typescript
dateFromFormat(new Date(), DateFormat.yearDateTime);
//2021.10.04 12:13

dateFromFormat(new Date(), DateFormat.shortMonthYear);
//Oct 2021
```

`calendarDate`:
```typescript
calendarDate(new Date());
//Today at 12:14 PM

calendarDate(new Date(), true)
//Today
```

`getUnixDate`:
```typescript
getUnixDate(new Date());
//1633338938000
```

`getInitialDate`:
```typescript
getInitialDate(new Date());
// 2021-10-04T09:16:17.565Z

getInitialDate(null, new Date("2012-10-01"));
//2012-10-01T00:00:00.000Z
```

## Check how it looks

You can open StoryBook and open `Format` -> `Date Formats` and `Date Formats Enum` stories and see how they are being applied.
