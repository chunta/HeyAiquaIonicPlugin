import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';

export class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
  constructor() {
    super({
      name: 'HeyAiquaIonicPlugin',
      platforms: ['web']
    });
  }

  async echo(_: { value: string }): Promise<void> {
    //return options;
    //console.log(value);
    // return;
  }

  async start(options: { appid: string }): Promise<{appid: string}> {
    return options;
  }

  async log(options: { name: string }): Promise<{name: string}> {
    return options;
  }

  async setToken(options: { token: string }): Promise<{token: string}> {
    return options;
  }
}

const HeyAiquaIonicPlugin = new HeyAiquaIonicPluginWeb();

export { HeyAiquaIonicPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HeyAiquaIonicPlugin);
