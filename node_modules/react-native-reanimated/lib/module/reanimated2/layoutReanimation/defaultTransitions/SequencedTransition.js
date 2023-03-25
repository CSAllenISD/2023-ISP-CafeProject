function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withSequence, withTiming } from '../../animation';
import { BaseAnimationBuilder } from '../animationBuilder';
export class SequencedTransition extends BaseAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "reversed", false);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const sequenceDuration = (this.durationV ?? 500) / 2;
      const config = {
        duration: sequenceDuration
      };
      const reverse = this.reversed;
      return values => {
        'worklet';

        return {
          initialValues: {
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight
          },
          animations: {
            originX: delayFunction(delay, withSequence(withTiming(reverse ? values.currentOriginX : values.targetOriginX, config), withTiming(values.targetOriginX, config))),
            originY: delayFunction(delay, withSequence(withTiming(reverse ? values.targetOriginY : values.currentOriginY, config), withTiming(values.targetOriginY, config))),
            width: delayFunction(delay, withSequence(withTiming(reverse ? values.currentWidth : values.targetWidth, config), withTiming(values.targetWidth, config))),
            height: delayFunction(delay, withSequence(withTiming(reverse ? values.targetHeight : values.currentHeight, config), withTiming(values.targetHeight, config)))
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SequencedTransition();
  }

  static reverse() {
    const instance = SequencedTransition.createInstance();
    return instance.reverse();
  }

  reverse() {
    this.reversed = !this.reversed;
    return this;
  }

}
//# sourceMappingURL=SequencedTransition.js.map