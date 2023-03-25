"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightSpeedOutRight = exports.LightSpeedOutLeft = exports.LightSpeedInRight = exports.LightSpeedInLeft = void 0;

var _animation = require("../../animation");

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LightSpeedInRight extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, (0, _animation.withTiming)(1, {
              duration: duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, { ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, (0, _animation.withSequence)((0, _animation.withTiming)('10deg', {
                duration: duration * 0.7
              }), (0, _animation.withTiming)('-5deg', {
                duration: duration * 0.15
              }), (0, _animation.withTiming)('0deg', {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: values.windowWidth
            }, {
              skewX: '-45deg'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new LightSpeedInRight();
  }

}

exports.LightSpeedInRight = LightSpeedInRight;

class LightSpeedInLeft extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, (0, _animation.withTiming)(1, {
              duration: duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, { ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, (0, _animation.withSequence)((0, _animation.withTiming)('-10deg', {
                duration: duration * 0.7
              }), (0, _animation.withTiming)('5deg', {
                duration: duration * 0.15
              }), (0, _animation.withTiming)('0deg', {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: -values.windowWidth
            }, {
              skewX: '45deg'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new LightSpeedInLeft();
  }

}

exports.LightSpeedInLeft = LightSpeedInLeft;

class LightSpeedOutRight extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(values.windowWidth, config))
            }, {
              skewX: delayFunction(delay, animation('-45deg', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }, {
              skewX: '0deg'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new LightSpeedOutRight();
  }

}

exports.LightSpeedOutRight = LightSpeedOutRight;

class LightSpeedOutLeft extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(-values.windowWidth, config))
            }, {
              skewX: delayFunction(delay, animation('45deg', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }, {
              skewX: '0deg'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new LightSpeedOutLeft();
  }

}

exports.LightSpeedOutLeft = LightSpeedOutLeft;
//# sourceMappingURL=Lightspeed.js.map