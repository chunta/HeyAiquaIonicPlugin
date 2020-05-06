package com.appier.aiqua;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class HeyAiquaIonicPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    public void start(PluginCall call) {
        String appid = call.getString("appid");

        JSObject ret = new JSObject();
        ret.put("value", appid);
        call.success(ret);
    }

    public void log(PluginCall call) {
        String name = call.getString("name");

        JSObject ret = new JSObject();
        ret.put("value", name);
        call.success(ret);
    }
}
