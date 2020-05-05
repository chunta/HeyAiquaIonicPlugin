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

        QGSdk.getSharedInstance().logEvent("233")
        call.success([
            "value": value
        ])
    }
}
