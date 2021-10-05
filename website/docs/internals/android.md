---
sidebar_position: 2
title: Android internals
---
## Hermes
Enabled

## Proguard

By default `proguard` is enabled, so be careful when installing new native dependencies.

## Versions

Next versions are being used:
- kotlinVersion - `1.5.31`
- buildToolsVersion - `30.0.2`
- minSdkVersion - `21`
- compileSdkVersion - `30`
- targetSdkVersion - `30`
- androidXCore - `1.6.0`
- ndkVersion - `23.0.7599858`

## Gradle

- Gradle version is set to `7.2`
- com.android.tools.build:gradle - `4.2.2`


## Network security config
There's a network security config which defines next addresses to be allowed:
- localhost
- 10.0.2.2 - Android Emulator
- 10.0.3.2 - Genymotion Emulator

If you have troubles connecting while in debug from physical device, try to add your IP address in `network_security_config.xml`.

## Large heap
Large heap is enabled by default, you can disable it but practice shows that in most of the cases you need to enable it.


