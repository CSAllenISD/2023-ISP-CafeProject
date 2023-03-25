function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeModules } from 'react-native';
import { checkVersion } from '../platform-specific/checkVersion';
export class NativeReanimated {
  constructor() {
    let native = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _defineProperty(this, "native", void 0);

    _defineProperty(this, "InnerNativeModule", void 0);

    if (global.__reanimatedModuleProxy === undefined && native) {
      const {
        ReanimatedModule
      } = NativeModules;
      ReanimatedModule === null || ReanimatedModule === void 0 ? void 0 : ReanimatedModule.installTurboModule();
    }

    this.InnerNativeModule = global.__reanimatedModuleProxy;
    this.native = native;

    if (native) {
      if (this.InnerNativeModule === undefined) {
        console.error(`[Reanimated] The native part of Reanimated doesn't seem to be initialized. This could be caused by\n\
  - not rebuilding the app after installing or upgrading Reanimated\n\
  - trying to run Reanimated on an unsupported platform\n\
  - running in a brownfield app without manually initializing the native library`);
        return;
      }

      checkVersion();
    }
  }

  installCoreFunctions(callGuard, valueUnpacker) {
    return this.InnerNativeModule.installCoreFunctions(callGuard, valueUnpacker);
  }

  makeShareableClone(value, shouldPersistRemote) {
    return this.InnerNativeModule.makeShareableClone(value, shouldPersistRemote);
  }

  makeSynchronizedDataHolder(valueRef) {
    return this.InnerNativeModule.makeSynchronizedDataHolder(valueRef);
  }

  getDataSynchronously(ref) {
    return this.InnerNativeModule.getDataSynchronously(ref);
  }

  updateDataSynchronously(ref, value) {
    this.InnerNativeModule.updateDataSynchronously(ref, value);
  }

  scheduleOnUI(shareable) {
    return this.InnerNativeModule.scheduleOnUI(shareable);
  }

  registerSensor(sensorType, interval, iosReferenceFrame, handler) {
    return this.InnerNativeModule.registerSensor(sensorType, interval, iosReferenceFrame, handler);
  }

  unregisterSensor(sensorId) {
    return this.InnerNativeModule.unregisterSensor(sensorId);
  }

  registerEventHandler(eventHash, eventHandler) {
    return this.InnerNativeModule.registerEventHandler(eventHash, eventHandler);
  }

  unregisterEventHandler(id) {
    return this.InnerNativeModule.unregisterEventHandler(id);
  }

  getViewProp(viewTag, propName, callback) {
    return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
  }

  configureLayoutAnimation(viewTag, type, sharedTransitionTag, config) {
    this.InnerNativeModule.configureLayoutAnimation(viewTag, type, sharedTransitionTag, config);
  }

  enableLayoutAnimations(flag) {
    this.InnerNativeModule.enableLayoutAnimations(flag);
  }

  configureProps(uiProps, nativeProps) {
    this.InnerNativeModule.configureProps(uiProps, nativeProps);
  }

  subscribeForKeyboardEvents(handler, isStatusBarTranslucent) {
    return this.InnerNativeModule.subscribeForKeyboardEvents(handler, isStatusBarTranslucent);
  }

  unsubscribeFromKeyboardEvents(listenerId) {
    this.InnerNativeModule.unsubscribeFromKeyboardEvents(listenerId);
  }

}
//# sourceMappingURL=NativeReanimated.js.map