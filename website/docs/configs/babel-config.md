---
sidebar_position: 8
title: Babel config
---

Babel config utilizes [metro-react-native-babel-preset](https://www.npmjs.com/package/metro-react-native-babel-preset)
by default.

In production, it also removes `console` by using [transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console).

There's also a transform of `react-native-config` in test environment to [mock it](https://github.com/luggit/react-native-config#testing).
