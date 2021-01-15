import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';
export declare class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
    constructor();
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
    disableInAppCampaigns(_: {
        disabled: boolean;
    }): Promise<void>;
    getRecommendationWithScenarioId(_: {
        scenarioId: string;
        productId?: string;
        parameters?: unknown;
    }): Promise<unknown>;
    logRecommendationClickedWithScenarioId(_: {
        scenarioId: string;
        modelId: number;
        productId: string;
        recommendationId: string;
    }): Promise<void>;
}
declare const HeyAiquaIonicPlugin: HeyAiquaIonicPluginWeb;
export { HeyAiquaIonicPlugin };
