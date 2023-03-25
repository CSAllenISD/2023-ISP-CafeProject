function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withSequence, withTiming } from '../../animation';
import { Easing } from '../../Easing';
import { BaseAnimationBuilder } from '../animationBuilder';
export class JumpingTransition extends BaseAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const duration = (this.durationV ?? 300) / 2;
      const config = {
        duration: duration * 2
      };
      return values => {
        'worklet';

        const d = Math.max(Math.abs(values.targetOriginX - values.currentOriginX), Math.abs(values.targetOriginY - values.currentOriginY));
        return {
          initialValues: {
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight
          },
          animations: {
            originX: delayFunction(delay, withTiming(values.targetOriginX, config)),
            originY: delayFunction(delay, withSequence(withTiming(Math.min(values.targetOriginY, values.currentOriginY) - d, {
              duration,
              easing: Easing.out(Easing.exp)
            }), withTiming(values.targetOriginY, { ...config,
              duration,
              easing: Easing.bounce
            }))),
            width: delayFunction(delay, withTiming(values.targetWidth, config)),
            height: delayFunction(delay, withTiming(values.targetHeight, config))
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new JumpingTransition();
  }

}
//# sourceMappingURL=JumpingTransition.js.map