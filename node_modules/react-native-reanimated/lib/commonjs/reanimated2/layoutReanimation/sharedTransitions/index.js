"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedTransition = exports.DefaultSharedTransition = void 0;

var _animation = require("../../animation");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const supportedProps = ['width', 'height', 'originX', 'originY', 'transform'];

class SharedTransition {
  constructor() {
    _defineProperty(this, "animationFactory", null);

    _defineProperty(this, "defaultDuration", 500);
  }

  static createInstance() {
    return new SharedTransition();
  }

  static custom(animationFactory) {
    return this.createInstance().custom(animationFactory);
  }

  custom(animationFactory) {
    this.animationFactory = animationFactory;
    return this;
  }

  static build() {
    return this.createInstance().build();
  }

  build() {
    const animationFactory = this.animationFactory;
    const animationDuration = this.defaultDuration;
    return values => {
      'worklet';

      let animations = {};
      const initialValues = {};

      if (animationFactory) {
        animations = animationFactory(values);

        for (const key in animations) {
          if (!supportedProps.includes(key)) {
            throw Error(`The prop '${key}' is not supported yet.`);
          }
        }
      } else {
        for (const propName of supportedProps) {
          if (propName === 'transform') {
            const matrix = values.targetTransformMatrix;
            animations.transformMatrix = (0, _animation.withTiming)(matrix, {
              // native screen transition takes around 500ms
              duration: animationDuration
            });
          } else {
            const keyToTargetValue = 'target' + propName.charAt(0).toUpperCase() + propName.slice(1);
            animations[propName] = (0, _animation.withTiming)(values[keyToTargetValue], {
              // native screen transition takes around 500ms
              duration: animationDuration
            });
          }
        }
      }

      for (const propName in animations) {
        if (propName === 'transform') {
          initialValues.transformMatrix = values.currentTransformMatrix;
        } else {
          const keyToCurrentValue = 'current' + propName.charAt(0).toUpperCase() + propName.slice(1);
          initialValues[propName] = values[keyToCurrentValue];
        }
      }

      return {
        initialValues,
        animations
      };
    };
  }

}

exports.SharedTransition = SharedTransition;
const DefaultSharedTransition = SharedTransition;
exports.DefaultSharedTransition = DefaultSharedTransition;
//# sourceMappingURL=index.js.map