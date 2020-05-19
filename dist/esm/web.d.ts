import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';
export declare class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<void>;
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
    setToken(options: {
        token: string;
    }): Promise<{
        token: string;
    }>;
}
declare const HeyAiquaIonicPlugin: HeyAiquaIonicPluginWeb;
export { HeyAiquaIonicPlugin };
