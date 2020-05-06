#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(HeyAiquaIonicPlugin, "HeyAiquaIonicPlugin",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(log, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(start, CAPPluginReturnPromise);
)


//CAP_PLUGIN(CAPAccessibilityPlugin, "Accessibility",
//  CAP_PLUGIN_METHOD(isScreenReaderEnabled, CAPPluginReturnPromise);
//  CAP_PLUGIN_METHOD(speak, CAPPluginReturnPromise);
//  CAP_PLUGIN_METHOD(removeAllListeners, CAPPluginReturnNone);
//)
