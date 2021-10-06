---
sidebar_position: 20
title: Patches
---

## Content

Work with patches made possible by [patch-package](https://github.com/ds300/patch-package).

Sometimes it's needed to make changes in packages from `node_modules`.

There might be an error, mistake, or you need to adjust module to your needs.

The best possible way to do so is to make a fork and propose your changes.
But this might take some time to accept your changes, or maintainer refuses to accept them,
or even worse, dependency is not maintained anymore.

To handle this situation the best possible way is to make a local patch.

## Usage

First make changes to the files of a particular package in your `node_modules` folder, then run

```shell
npx patch-package package-name
```

where `package-name` matches the name of the package you made changes to.


