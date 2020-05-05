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
}
