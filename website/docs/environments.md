---
sidebar_position: 16
title: Environments
---
Work with environments made possible by [react-native-config](https://github.com/luggit/react-native-config).

## Content

The application has 4 primitive environments:
- `.env` - Development
- `.env.test` - Test
- `.env.staging` - Staging
- `.env.production` - Production

Each has a set of predefined values:
- `API_URL` - URL of you API
- `ENVIRONMENT` - current selected environment
- `IGNORE_NET_INFO` - ignore `NetInfo` or not (useful while in development)

## Usage

To use environment variables you simply need to import `Config` and use your parameters, like so:

```typescript
import Config from "react-native-config";

Config.ENVIRONMENT;
```

## Change environment

By default, `.env` (development) is selected environment, 
to change that you need to run one of the [scripts](../docs/dependencies#environment-specific) from `package.json` 
and rebuild your app.

## Add more parameters

To add more parameters, first you have to add them in types:
- Open [react-native-config.d.ts](https://github.com/svbutko/react-native-template-strong/blob/main/template/src/types/react-native-config.d.ts)
- Define your parameter with type inside `EnvironmentVariables`

After that add your parameters with values into each `.env` file.

To see it into action you need to rebuild the application.

