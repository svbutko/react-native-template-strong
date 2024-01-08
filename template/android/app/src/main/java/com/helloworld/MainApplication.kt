package com.helloworld;

import com.facebook.react.PackageList
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost
import org.wonday.orientation.OrientationActivityLifecycle
import com.facebook.react.modules.i18nmanager.I18nUtil
import com.facebook.react.flipper.ReactNativeFlipper

class MainApplication: NavigationApplication() {

    override val reactNativeHost: ReactNativeHost =
            object : NavigationReactNativeHost(this) {
                override fun getPackages(): List<ReactPackage> {
                    // Packages that cannot be autolinked yet can be added manually here, for example:
                    // packages.add(new MyReactNativePackage());
                    return PackageList(this).packages
                }

                override fun getJSMainModuleName(): String = "index"

                override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

                override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
                override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
            }

    override val reactHost: ReactHost
        get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

    override fun onCreate() {
        super.onCreate()
        val sharedI18nUtilInstance = I18nUtil.getInstance()
        sharedI18nUtilInstance.allowRTL(this, true)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
        ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
        registerActivityLifecycleCallbacks(OrientationActivityLifecycle.getInstance())
    }
}
