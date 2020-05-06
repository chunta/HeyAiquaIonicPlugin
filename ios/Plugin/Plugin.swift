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
        print("value ", value)
        QGSdk.getSharedInstance().onStart("9cce3dd2bb98c0dad844", setDevProfile: true)
        QGSdk.getSharedInstance().logEvent("gigi2")
        call.success([
            "value": value
        ])
    }
    
    /*
    @objc func start(_ call: CAPPluginCall) {
        let appid = call.getString("appid") ?? ""
        print("appid ", appid)
        QGSdk.getSharedInstance().onStart(appid, setDevProfile: true)
        call.success([
                   "appid": appid
               ])
    }
    
    @objc func log(_ call: CAPPluginCall) {
        let name = call.getString("name") ?? ""
        print("name ", name)
        QGSdk.getSharedInstance().logEvent(name)
        call.success([
                    "name": name
                ])
    }
    */
}
