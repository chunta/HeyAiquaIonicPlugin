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
        call.success([
            "value": value
        ])
    }
    
    @objc func start(_ call: CAPPluginCall) {
        let appid = call.getString("appid") ?? ""
        QGSdk.getSharedInstance().onStart(appid, setDevProfile: true)
    }
    
    @objc func log(_ call: CAPPluginCall) {
        let value = call.getString("name") ?? ""
        QGSdk.getSharedInstance().logEvent(value)
    }
}
