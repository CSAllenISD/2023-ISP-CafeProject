function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ComplexAnimationBuilder } from '../animationBuilder/ComplexAnimationBuilder';
export class LinearTransition extends ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const delay = this.getDelay();
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
            originX: delayFunction(delay, animation(values.targetOriginX, config)),
            originY: delayFunction(delay, animation(values.targetOriginY, config)),
            width: delayFunction(delay, animation(values.targetWidth, config)),
            height: delayFunction(delay, animation(values.targetHeight, config))
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new LinearTransition();
  }

}
export const Layout = LinearTransition;
//# sourceMappingURL=LinearTransition.js.map