package com.helloworld;

import com.reactnativenavigation.NavigationActivity;

class MainActivity: NavigationActivity() {
    override fun invokeDefaultOnBackPressed() {
        moveTaskToBack(true)
    }
}
