declare module "@capacitor/core" {
    interface PluginRegistry {
        HeyAiquaIonicPlugin: HeyAiquaIonicPluginPlugin;
    }
}
export interface HeyAiquaIonicPluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    start(options: {
        appid: string;
    }): Promise<{
        appid: string;
    }>;
    log(options: {
        name: string;
    }): Promise<{
        name: string;
    }>;
}
