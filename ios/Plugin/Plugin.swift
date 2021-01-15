import Foundation
import Capacitor
import Appier
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(HeyAiquaIonicPlugin)
public class HeyAiquaIonicPlugin: CAPPlugin {

    /// Appier Official
    @objc func configure(_ call: CAPPluginCall) {
        guard let appId = call.options["appId"] as? String else {
            call.reject("Missing AppId")
            return
        }
        let appGroup = call.getString("appGroup") ?? nil
        let isDev = call.getBool("isDev") ?? false
        DispatchQueue.main.async {
            QGSdk.getSharedInstance().onStart(
                appId,
                withAppGroup: appGroup,
                setDevProfile: isDev)
        }
        call.resolve()
    }

    @objc func setUniversalLinkDomains(_ call: CAPPluginCall) {
        //guard let domains = call.getArray("domains", String.self) else {
        guard let domains = call.options["domains"] as? [String] else {
            call.reject("Empty Domains passed")
            return
        }
        QGSdk.getSharedInstance().setUniversalLinkDomains(domains)
        call.resolve();
    }

    @objc func logEvent(_ call: CAPPluginCall) {
        guard let eventName = call.options["eventName"] as? String else {
            call.reject("Missing eventName")
            return
        }

        let parameters = call.getObject("parameters") ?? nil
        let vts = call.options["vts"] as? NSNumber ?? nil
        let vtsCurr = call.getString("vtsCurr") ?? nil
        QGSdk.getSharedInstance().logEvent(eventName, withParameters: parameters, withValueToSum: vts, withValueToSumCurrency: vtsCurr)
        call.resolve();
    }

    @objc func flush(_ call: CAPPluginCall) {
        QGSdk.getSharedInstance().flush()
        call.resolve();
    }

    @objc func setUserId(_ call: CAPPluginCall) {
        guard let data = call.options["userId"] as? String else {
            call.reject("Missing userId")
            return
        }
        QGSdk.getSharedInstance().setUserId(data)
    }

    @objc func setName(_ call: CAPPluginCall) {
        guard let data = call.options["name"] as? String else {
            call.reject("Missing name")
            return
        }
        QGSdk.getSharedInstance().setName(data)
        call.resolve();
    }

    @objc func setFirstName(_ call: CAPPluginCall) {
        guard let data = call.options["firstname"] as? String else {
            call.reject("Missing firstname")
            return
        }
        QGSdk.getSharedInstance().setFirstName(data)
        call.resolve();
    }

    @objc func setLastName(_ call: CAPPluginCall) {
        guard let data = call.options["lastname"] as? String else {
            call.reject("Missing lastname")
            return
        }
        QGSdk.getSharedInstance().setLastName(data)
        call.resolve();
    }

    @objc func setCity(_ call: CAPPluginCall) {
        guard let data = call.options["city"] as? String else {
            call.reject("Missing city")
            return
        }
        QGSdk.getSharedInstance().setCity(data)
        call.resolve();
    }

    @objc func setEmail(_ call: CAPPluginCall) {
        guard let data = call.options["email"] as? String else {
            call.reject("Missing email")
            return
        }
        QGSdk.getSharedInstance().setEmail(data)
        call.resolve();
    }

    @objc func setPhoneNumber(_ call: CAPPluginCall) {
        guard let data = call.options["phoneNo"] as? String else {
            call.reject("Missing phoneNo")
            return
        }
        QGSdk.getSharedInstance().setCustomKey("phoneNo", withValue: data)
        call.resolve();
    }

    @objc func setDayOfBirth(_ call: CAPPluginCall) {
        guard let data = call.options["day"] as? NSNumber else {
            call.reject("Missing day")
            return
        }
        QGSdk.getSharedInstance().setDayOfBirth(data)
        call.resolve();
    }

    @objc func setMonthOfBirth(_ call: CAPPluginCall) {
        guard let data = call.options["month"] as? NSNumber else {
            call.reject("Missing month")
            return
        }
        QGSdk.getSharedInstance().setMonthOfBirth(data)
        call.resolve();
    }

    @objc func setYearOfBirth(_ call: CAPPluginCall) {
        guard let data = call.options["year"] as? NSNumber else {
            call.reject("Missing year")
            return
        }
        QGSdk.getSharedInstance().setYearOfBirth(data)
        call.resolve();
    }

    @objc func setCustomKey(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Missing key")
            return
        }
        let value : Any = call.options["value"] as Any

        QGSdk.getSharedInstance().setCustomKey(key, withValue: value)
        call.resolve();
    }

    @objc func setAttributionWindow(_ call: CAPPluginCall) {
        let seconds = call.getInt("seconds")!
        QGSdk.getSharedInstance().setAttributionWindow(seconds)
        call.resolve();
    }

    @objc func setClickAttributionWindow(_ call: CAPPluginCall) {
        let seconds = call.getInt("seconds")!
        QGSdk.getSharedInstance().setClickAttributionWindow(seconds)
        call.resolve();
    }

    @objc func disableInAppCampaigns(_ call: CAPPluginCall) {
         guard let disabled = call.options["disabled"] as? Bool else {
            call.reject("Missing disabled")
            return
        }
        print("disabled:", disabled)
        QGSdk.getSharedInstance().disable(inAppCampaigns: disabled)
        call.resolve()
    }

    @objc func getRecommendationWithScenarioId(_ call: CAPPluginCall) {

        guard let scenarioId:String = call.options["scenarioId"] as? String else {
            call.reject("Missing scenarioId")
            return
        }
        let productId:String = (call.options["productId"] as? String) ?? ""
        let parameters:[String:Any] = (call.options["parameters"] as? [String:Any]) ?? [:]
        print("scenarioId -", scenarioId);
        print("productId -", productId);
        print("parameters -", parameters);
        QGSdk.getSharedInstance().getRecommendationWithScenarioId(scenarioId, 
        withProductId: productId, 
        withQueryParameters: parameters, 
        withCompletionHandler: { response in
            print("raw response:", response)
            guard let finalResponse:[String:Any] = response as? [String:Any] else {
                call.resolve([:])
                return
            }
            print("response:", finalResponse)
            call.resolve(finalResponse)
        })
    }

    @objc func logRecommendationClickedWithScenarioId(_ call: CAPPluginCall) {

    }
 }