function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withSequence, withTiming } from '../../animation';
import { ComplexAnimationBuilder } from '../animationBuilder';
export class LightSpeedInRight extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, withTiming(1, {
              duration: duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, { ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, withSequence(withTiming('10deg', {
                duration: duration * 0.7
              }), withTiming('-5deg', {
                duration: duration * 0.15
              }), withTiming('0deg', {
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
export class LightSpeedInLeft extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, withTiming(1, {
              duration: duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, { ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, withSequence(withTiming('-10deg', {
                duration: duration * 0.7
              }), withTiming('5deg', {
                duration: duration * 0.15
              }), withTiming('0deg', {
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
export class LightSpeedOutRight extends ComplexAnimationBuilder {
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
export class LightSpeedOutLeft extends ComplexAnimationBuilder {
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
//# sourceMappingURL=Lightspeed.js.map