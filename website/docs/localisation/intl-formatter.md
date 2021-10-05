---
sidebar_position: 4
title: Intl formatter
---
## Content

`intlFormatter` offers formatting options for numbers, prices, percentage and currencies depending on current language.

Next functions are available, and they format numbers based on current language 
(percentage sign or currency sign placement, dot or comma between decimals, how many fraction digits to show)

- `formatPercent` - formats percentage
- `formatCurrency` - formats prices (by default it uses `USD` as currency)
- `formatDecimal` - formats decimals

## Usage

The following results are based on English locale

`formatPercent`:
```typescript
formatPercent(25);
//25%
```

`formatCurrency`:
```typescript
formatCurrency(10000);
//$10,000

formatCurrency(10000, "EUR");
//€10,000
```

`formatDecimal`:
```typescript
formatDecimal(10000);
//10,000
```

## Check how it looks

You can open StoryBook and open `Format` -> `Intl Formats` stories and see how they are being applied.
