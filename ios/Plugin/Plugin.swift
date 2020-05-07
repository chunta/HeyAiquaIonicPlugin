import Foundation
import Capacitor
import HeyRexLib
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(HeyAiquaIonicPlugin)
public class HeyAiquaIonicPlugin: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        print("Native Swift", value)
        call.success([
            "value": value
        ])
    }

    @objc func start(_ call: CAPPluginCall) {
        let appid = call.getString("appid") ?? ""
        print("appid", appid)
        DispatchQueue.main.async {
            QGSdk.getSharedInstance().onStart(appid, setDevProfile: true)
        }
        call.success([
            "appid": appid
        ])
    }

    @objc func log(_ call: CAPPluginCall) {
        let name = call.getString("name") ?? ""
        print("name", name)
        DispatchQueue.main.async {
            QGSdk.getSharedInstance().logEvent(name)
        }
        call.success([
            "name": name
        ])
    }

    @objc func setToken(_ call: CAPPluginCall) {
        let token = call.getString("token") ?? ""
        print("token", token)
        DispatchQueue.main.async {
            QGSdk.getSharedInstance().setCustomKey("gcmId", withValue: token)
        }
        call.success([
            "token": token
        ])
    }

}
