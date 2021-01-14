import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';

export class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
  constructor() {
    super({
      name: 'HeyAiquaIonicPlugin',
      platforms: ['web']
    });
  }

  // init sdk
  async configure(_: {
    appId: string;
    senderId?: string;
    appGroup?: string;
    isDev?: boolean;
  }): Promise<void> {
    /* do nothing. */
  }

  async setUniversalLinkDomains(_: { domains: string[] }): Promise<void> {
    /* do nothing. */
  }

  async logEvent(_: {
    eventName: string;
    parameters?: unknown;
    vts?: number;
    vtsCurr?: string;
  }): Promise<void> {
    /* do nothing. */
  }
  async flush(): Promise<void> {
    /* do nothing. */
  }
  async setUserId(_: { userId: string }): Promise<void> {
    /* do nothing. */
  }
  async setName(_: { name: string }): Promise<void> {
    /* do nothing. */
  }
  async setFirstName(_: { firstname: string }): Promise<void> {
    /* do nothing. */
  }
  async setLastName(_: { lastname: string }): Promise<void> {
    /* do nothing. */
  }
  async setCity(_: { city: string }): Promise<void> {
    /* do nothing. */
  }
  async setEmail(_: { email: string }): Promise<void> {
    /* do nothing. */
  }
  async setPhoneNumber(_: { phoneNo: string }): Promise<void> {
    /* do nothing. */
  }
  async setDayOfBirth(_: { day: number }): Promise<void> {
    /* do nothing. */
  }
  async setMonthOfBirth(_: { month: number }): Promise<void> {
    /* do nothing. */
  }
  async setYearOfBirth(_: { year: number }): Promise<void> {
    /* do nothing. */
  }
  async setCustomKey(_: { key: string; value: unknown }): Promise<void> {
    /* do nothing. */
  }

  async setAttributionWindow(_: { seconds: number }): Promise<void> {
    /* do nothing. */
  }
  async setClickAttributionWindow(_: { seconds: number }): Promise<void> {
    /* do nothing. */
  }
  async disableInAppCampaigns(_: { disabled: boolean }): Promise<void> {
    /* do nothing. */
  }
  async getRecommendationWithScenarioId(_: { scenarioId: string, productId?: string, parameters?: unknown}): Promise<void> {
    /* do nothing. */
  }
}

const HeyAiquaIonicPlugin = new HeyAiquaIonicPluginWeb();

export { HeyAiquaIonicPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HeyAiquaIonicPlugin);
