---
sidebar_position: 2
title: Module
---

## Content

Module structure contains:
- Screen or screens
- Redux state
- Redux slice
- Components used only with this module

Example:

```
src
│
│
│
└───modules
│   │
│   │
│   │
│   └───companyOffers
│       │   CompanyOffers.tsx
│       │   companyOffersSlice.ts
│       │   companyOffersState.ts
│       └───components
│           │   CompanyOfferItem.tsx
│           │   CompanyOffersHeader.tsx
│           │
│           └───
```
