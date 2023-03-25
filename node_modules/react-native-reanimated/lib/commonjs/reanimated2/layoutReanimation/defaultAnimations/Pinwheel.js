"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinwheelOut = exports.PinwheelIn = void 0;

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PinwheelIn extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return _values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              scale: delayFunction(delay, animation(1, config))
            }, {
              rotate: delayFunction(delay, animation('0', config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              scale: 0
            }, {
              rotate: '5'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new PinwheelIn();
  }

}

exports.PinwheelIn = PinwheelIn;

class PinwheelOut extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return _values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              scale: delayFunction(delay, animation(0, config))
            }, {
              rotate: delayFunction(delay, animation('5', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              scale: 1
            }, {
              rotate: '0'
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new PinwheelOut();
  }

}

exports.PinwheelOut = PinwheelOut;
//# sourceMappingURL=Pinwheel.js.map