"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurvedTransition = void 0;

var _animationBuilder = require("../animationBuilder");

var _Easing = require("../../Easing");

var _animation = require("../../animation");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CurvedTransition extends _animationBuilder.BaseAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "easingXV", _Easing.Easing.in(_Easing.Easing.ease));

    _defineProperty(this, "easingYV", _Easing.Easing.out(_Easing.Easing.ease));

    _defineProperty(this, "easingWidthV", _Easing.Easing.in(_Easing.Easing.exp));

    _defineProperty(this, "easingHeightV", _Easing.Easing.out(_Easing.Easing.exp));

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const duration = this.durationV ?? 300;
      const easing = {
        easingX: this.easingXV,
        easingY: this.easingYV,
        easingWidth: this.easingWidthV,
        easingHeight: this.easingHeightV
      };
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
            originX: delayFunction(delay, (0, _animation.withTiming)(values.targetOriginX, {
              duration,
              easing: easing.easingX
            })),
            originY: delayFunction(delay, (0, _animation.withTiming)(values.targetOriginY, {
              duration,
              easing: easing.easingY
            })),
            width: delayFunction(delay, (0, _animation.withTiming)(values.targetWidth, {
              duration,
              easing: easing.easingWidth
            })),
            height: delayFunction(delay, (0, _animation.withTiming)(values.targetHeight, {
              duration,
              easing: easing.easingHeight
            }))
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new CurvedTransition();
  }

  static easingX(easing) {
    const instance = this.createInstance();
    return instance.easingX(easing);
  }

  easingX(easing) {
    this.easingXV = easing;
    return this;
  }

  static easingY(easing) {
    const instance = this.createInstance();
    return instance.easingY(easing);
  }

  easingY(easing) {
    this.easingYV = easing;
    return this;
  }

  static easingWidth(easing) {
    const instance = this.createInstance();
    return instance.easingWidth(easing);
  }

  easingWidth(easing) {
    this.easingWidthV = easing;
    return this;
  }

  static easingHeight(easing) {
    const instance = this.createInstance();
    return instance.easingHeight(easing);
  }

  easingHeight(easing) {
    this.easingHeightV = easing;
    return this;
  }

}

exports.CurvedTransition = CurvedTransition;
//# sourceMappingURL=CurvedTransition.js.map