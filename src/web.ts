import { WebPlugin } from '@capacitor/core';
import { HeyAiquaIonicPluginPlugin } from './definitions';

export class HeyAiquaIonicPluginWeb extends WebPlugin implements HeyAiquaIonicPluginPlugin {
  constructor() {
    super({
      name: 'HeyAiquaIonicPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async start(options: { appid: string }): Promise<{appid: string}> {
    console.log('START', options);
    return options;
  }

  async log(options: { name: string }): Promise<{name: string}> {
    console.log('LOG', options);
    return options;
  }
}

const HeyAiquaIonicPlugin = new HeyAiquaIonicPluginWeb();

export { HeyAiquaIonicPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HeyAiquaIonicPlugin);
