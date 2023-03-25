function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import NativeReanimatedModule from './NativeReanimated';
import { registerEventHandler, unregisterEventHandler } from './core';

function jsListener(eventName, handler) {
  return evt => {
    handler({ ...evt.nativeEvent,
      eventName
    });
  };
}

export default class WorkletEventHandler {
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

    if (!NativeReanimatedModule.native) {
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
    this.registrations = this.eventNames.map(eventName => registerEventHandler(viewTag + eventName, this.worklet));

    if (this.registrations.length === 0 && fallbackEventName) {
      this.registrations.push(registerEventHandler(viewTag + fallbackEventName, this.worklet));
    }
  }

  unregisterFromEvents() {
    this.registrations.forEach(id => unregisterEventHandler(id));
    this.registrations = [];
  }

}
//# sourceMappingURL=WorkletEventHandler.js.map