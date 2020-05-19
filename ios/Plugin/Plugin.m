#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(HeyAiquaIonicPlugin, "HeyAiquaIonicPlugin",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(start, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(log, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setToken, CAPPluginReturnPromise);
)
