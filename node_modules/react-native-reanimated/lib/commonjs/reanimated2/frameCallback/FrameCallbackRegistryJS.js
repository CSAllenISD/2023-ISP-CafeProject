"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../core");

var _FrameCallbackRegistryUI = require("./FrameCallbackRegistryUI");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FrameCallbackRegistryJS {
  constructor() {
    _defineProperty(this, "nextCallbackId", 0);

    (0, _FrameCallbackRegistryUI.prepareUIRegistry)();
  }

  registerFrameCallback(callback) {
    if (!callback) {
      return -1;
    }

    const callbackId = this.nextCallbackId;
    this.nextCallbackId++;
    (0, _core.runOnUI)(() => {
      'worklet';

      global._frameCallbackRegistry.registerFrameCallback(callback, callbackId);
    })();
    return callbackId;
  }

  unregisterFrameCallback(callbackId) {
    (0, _core.runOnUI)(() => {
      'worklet';

      global._frameCallbackRegistry.unregisterFrameCallback(callbackId);
    })();
  }

  manageStateFrameCallback(callbackId, state) {
    (0, _core.runOnUI)(() => {
      'worklet';

      global._frameCallbackRegistry.manageStateFrameCallback(callbackId, state);
    })();
  }

}

exports.default = FrameCallbackRegistryJS;
//# sourceMappingURL=FrameCallbackRegistryJS.js.map