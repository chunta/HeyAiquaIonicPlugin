import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';
export declare class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
    constructor();
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
declare const HeyAiquaIonicPlugin: HeyAiquaIonicPluginWeb;
export { HeyAiquaIonicPlugin };
