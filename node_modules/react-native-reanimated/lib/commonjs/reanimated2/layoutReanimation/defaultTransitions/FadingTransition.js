"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadingTransition = void 0;

var _animation = require("../../animation");

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FadingTransition extends _animationBuilder.BaseAnimationBuilder {
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
            opacity: delayFunction(delay, (0, _animation.withSequence)((0, _animation.withTiming)(0, {
              duration: duration
            }), (0, _animation.withTiming)(1, {
              duration: duration
            }))),
            originX: delayFunction(delay + duration, (0, _animation.withTiming)(values.targetOriginX, {
              duration: 50
            })),
            originY: delayFunction(delay + duration, (0, _animation.withTiming)(values.targetOriginY, {
              duration: 50
            })),
            width: delayFunction(delay + duration, (0, _animation.withTiming)(values.targetWidth, {
              duration: 50
            })),
            height: delayFunction(delay + duration, (0, _animation.withTiming)(values.targetHeight, {
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

exports.FadingTransition = FadingTransition;
//# sourceMappingURL=FadingTransition.js.map