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
    setToken(options: {
        token: string;
    }): Promise<{
        token: string;
    }>;
    log(options: {
        name: string;
    }): Promise<{
        name: string;
    }>;
    configure(_: {
        appId: string;
        senderId?: string;
        appGroup?: string;
        isDev?: boolean;
    }): Promise<void>;
    setUniversalLinkDomains(_: {
        domains: string[];
    }): Promise<void>;
    logEvent(_: {
        eventName: string;
        parameters?: unknown;
        vts?: number;
        vtsCurr?: string;
    }): Promise<void>;
    flush(): Promise<void>;
    setUserId(_: {
        userId: string;
    }): Promise<void>;
    setName(_: {
        name: string;
    }): Promise<void>;
    setFirstName(_: {
        firstname: string;
    }): Promise<void>;
    setLastName(_: {
        lastname: string;
    }): Promise<void>;
    setCity(_: {
        city: string;
    }): Promise<void>;
    setEmail(_: {
        email: string;
    }): Promise<void>;
    setPhoneNumber(_: {
        phoneNo: string;
    }): Promise<void>;
    setDayOfBirth(_: {
        day: number;
    }): Promise<void>;
    setMonthOfBirth(_: {
        month: number;
    }): Promise<void>;
    setYearOfBirth(_: {
        year: number;
    }): Promise<void>;
    setCustomKey(_: {
        key: string;
        value: unknown;
    }): Promise<void>;
    setAttributionWindow(_: {
        seconds: number;
    }): Promise<void>;
    setClickAttributionWindow(_: {
        seconds: number;
    }): Promise<void>;
}
declare const HeyAiquaIonicPlugin: HeyAiquaIonicPluginWeb;
export { HeyAiquaIonicPlugin };
