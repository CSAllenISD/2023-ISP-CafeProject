"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearTransition = exports.Layout = void 0;

var _ComplexAnimationBuilder = require("../animationBuilder/ComplexAnimationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LinearTransition extends _ComplexAnimationBuilder.ComplexAnimationBuilder {
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

exports.LinearTransition = LinearTransition;
const Layout = LinearTransition;
exports.Layout = Layout;
//# sourceMappingURL=LinearTransition.js.map