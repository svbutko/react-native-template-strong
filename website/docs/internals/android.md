---
sidebar_position: 2
title: Android internals
---
## Hermes
Enabled

## Proguard

By default `proguard` is disabled

## Versions

Next versions are being used:
- kotlinVersion - `1.9.22`
- buildToolsVersion - `34.0.0`
- minSdkVersion - `24`
- compileSdkVersion - `34`
- targetSdkVersion - `34`
- ndkVersion - `26.1.10909125`

## Gradle

- Gradle version is set to `8.6`

## Network security config
There's a network security config which defines next addresses to be allowed:
- localhost
- 10.0.2.2 - Android Emulator
- 10.0.3.2 - Genymotion Emulator

If you have troubles connecting while in debug from physical device, try to add your IP address in `network_security_config.xml`.

## Large heap
Large heap is enabled by default, you can disable it but practice shows that in most of the cases you need to enable it.


