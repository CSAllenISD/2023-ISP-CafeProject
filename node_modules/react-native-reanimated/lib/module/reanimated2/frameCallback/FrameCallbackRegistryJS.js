function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { runOnUI } from '../core';
import { prepareUIRegistry } from './FrameCallbackRegistryUI';
export default class FrameCallbackRegistryJS {
  constructor() {
    _defineProperty(this, "nextCallbackId", 0);

    prepareUIRegistry();
  }

  registerFrameCallback(callback) {
    if (!callback) {
      return -1;
    }

    const callbackId = this.nextCallbackId;
    this.nextCallbackId++;
    runOnUI(() => {
      'worklet';

      global._frameCallbackRegistry.registerFrameCallback(callback, callbackId);
    })();
    return callbackId;
  }

  unregisterFrameCallback(callbackId) {
    runOnUI(() => {
      'worklet';

      global._frameCallbackRegistry.unregisterFrameCallback(callbackId);
    })();
  }

  manageStateFrameCallback(callbackId, state) {
    runOnUI(() => {
      'worklet';

      global._frameCallbackRegistry.manageStateFrameCallback(callbackId, state);
    })();
  }

}
//# sourceMappingURL=FrameCallbackRegistryJS.js.map