function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withSequence, withTiming } from '../../animation';
import { BaseAnimationBuilder } from '../animationBuilder';
export class FadingTransition extends BaseAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const duration = this.durationV ?? 500;
      return values => {
        'worklet';

        return {
          initialValues: {
            opacity: 1,
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight
          },
          animations: {
            opacity: delayFunction(delay, withSequence(withTiming(0, {
              duration: duration
            }), withTiming(1, {
              duration: duration
            }))),
            originX: delayFunction(delay + duration, withTiming(values.targetOriginX, {
              duration: 50
            })),
            originY: delayFunction(delay + duration, withTiming(values.targetOriginY, {
              duration: 50
            })),
            width: delayFunction(delay + duration, withTiming(values.targetWidth, {
              duration: 50
            })),
            height: delayFunction(delay + duration, withTiming(values.targetHeight, {
              duration: 50
            }))
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadingTransition();
  }

}
//# sourceMappingURL=FadingTransition.js.map