declare module "@capacitor/core" {
    interface PluginRegistry {
        HeyAiquaIonicPlugin: HeyAiquaIonicPluginPlugin;
    }
}
export interface HeyAiquaIonicPluginPlugin {
    configure(options: {
        appId: string;
        senderId?: string;
        appGroup?: string;
        isDev?: boolean;
    }): Promise<void>;
    setUniversalLinkDomains(options: {
        domains: string[];
    }): Promise<void>;
    logEvent(options: {
        eventName: string;
        parameters?: unknown;
        vts?: number;
        vtsCurr?: string;
    }): Promise<void>;
    flush(): Promise<void>;
    setUserId(options: {
        userId: string;
    }): Promise<void>;
    setName(options: {
        name: string;
    }): Promise<void>;
    setFirstName(options: {
        firstname: string;
    }): Promise<void>;
    setLastName(options: {
        lastname: string;
    }): Promise<void>;
    setCity(options: {
        city: string;
    }): Promise<void>;
    setEmail(options: {
        email: string;
    }): Promise<void>;
    setPhoneNumber(options: {
        phoneNo: string;
    }): Promise<void>;
    setDayOfBirth(options: {
        day: number;
    }): Promise<void>;
    setMonthOfBirth(options: {
        month: number;
    }): Promise<void>;
    setYearOfBirth(options: {
        year: number;
    }): Promise<void>;
    setCustomKey(options: {
        key: string;
        value: unknown;
    }): Promise<void>;
    setAttributionWindow(options: {
        seconds: number;
    }): Promise<void>;
    setClickAttributionWindow(options: {
        seconds: number;
    }): Promise<void>;
    getRecommendationWithScenarioId(options: {
        scenarioId: string;
        parameters?: unknown;
    }): Promise<unknown[]>;
}
