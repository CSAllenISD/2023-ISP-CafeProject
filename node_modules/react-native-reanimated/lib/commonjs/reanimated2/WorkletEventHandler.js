"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NativeReanimated = _interopRequireDefault(require("./NativeReanimated"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function jsListener(eventName, handler) {
  return evt => {
    handler({ ...evt.nativeEvent,
      eventName
    });
  };
}

class WorkletEventHandler {
  constructor(worklet) {
    let eventNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _defineProperty(this, "worklet", void 0);

    _defineProperty(this, "eventNames", void 0);

    _defineProperty(this, "reattachNeeded", void 0);

    _defineProperty(this, "listeners", void 0);

    _defineProperty(this, "viewTag", void 0);

    _defineProperty(this, "registrations", void 0);

    this.worklet = worklet;
    this.eventNames = eventNames;
    this.reattachNeeded = false;
    this.listeners = {};
    this.viewTag = undefined;
    this.registrations = [];

    if (!_NativeReanimated.default.native) {
      this.listeners = eventNames.reduce((acc, eventName) => {
        acc[eventName] = jsListener(eventName, worklet);
        return acc;
      }, {});
    }
  }

  updateWorklet(newWorklet) {
    this.worklet = newWorklet;
    this.reattachNeeded = true;
  }

  registerForEvents(viewTag, fallbackEventName) {
    this.viewTag = viewTag;
    this.registrations = this.eventNames.map(eventName => (0, _core.registerEventHandler)(viewTag + eventName, this.worklet));

    if (this.registrations.length === 0 && fallbackEventName) {
      this.registrations.push((0, _core.registerEventHandler)(viewTag + fallbackEventName, this.worklet));
    }
  }

  unregisterFromEvents() {
    this.registrations.forEach(id => (0, _core.unregisterEventHandler)(id));
    this.registrations = [];
  }

}

exports.default = WorkletEventHandler;
//# sourceMappingURL=WorkletEventHandler.js.map