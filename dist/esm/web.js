var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class HeyAiquaIonicPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'HeyAiquaIonicPlugin',
            platforms: ['web']
        });
    }
    // init sdk
    configure(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setUniversalLinkDomains(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    logEvent(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    flush() {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setUserId(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setName(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setFirstName(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setLastName(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setCity(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setEmail(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setPhoneNumber(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setDayOfBirth(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setMonthOfBirth(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setYearOfBirth(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setCustomKey(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setAttributionWindow(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    setClickAttributionWindow(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    disableInAppCampaigns(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
    getRecommendationWithScenarioId(_) {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
            //return []
        });
    }
    logRecommendationClickedWithScenarioId() {
        return __awaiter(this, void 0, void 0, function* () {
            /* do nothing. */
        });
    }
}
const HeyAiquaIonicPlugin = new HeyAiquaIonicPluginWeb();
export { HeyAiquaIonicPlugin };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HeyAiquaIonicPlugin);
//# sourceMappingURL=web.js.map