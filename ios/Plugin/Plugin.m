#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(HeyAiquaIonicPlugin, "HeyAiquaIonicPlugin",
       CAP_PLUGIN_METHOD(echo, CAPPluginReturnNone);
       CAP_PLUGIN_METHOD(log, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setToken, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(configure, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setUniversalLinkDomains, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(flush, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setUserId, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setName, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setFirstName, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setLastName, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setCity, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setEmail, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setPhoneNumber, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setDayOfBirth, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setMonthOfBirth, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setYearOfBirth, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setCustomKey, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setAttributionWindow, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setClickAttributionWindow, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(disableInAppCampaigns, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(getRecommendationWithScenarioId, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(logRecommendationClickedWithScenarioId, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(fetchSavedPushNotifications, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(deleteSavedPushNotifications, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(deleteNotificationAtIndex, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(enablePushNotificationStorage, CAPPluginReturnPromise);
       CAP_PLUGIN_METHOD(setPushNotificationStorageLimit, CAPPluginReturnPromise);
)