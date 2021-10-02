---
sidebar_position: 1
title: iOS internals
---
## Hermes
Enabled

## Pods
There's a pods post installation action which bumps deployment target version of each pod to `13.0`
(only `RCT-Folly` stays on `11.0` due to to a bug).

## Versions
Deployment target is set to `13.0` later in plans to change it to `14.0`.

## Devices
It supports iPhones and iPads

## Orientations
All unlocked (locked in React Native by device type)

## Flipper
`Flipper` is disabled in `podfile` due to the fact that it increases app size and goes in production as a pod too,
you can enable it while testing but don't forget to comment it back.

