"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StretchOutY = exports.StretchOutX = exports.StretchInY = exports.StretchInX = void 0;

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StretchInX extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleX: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleX: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new StretchInX();
  }

}

exports.StretchInX = StretchInX;

class StretchInY extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleY: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleY: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new StretchInY();
  }

}

exports.StretchInY = StretchInY;

class StretchOutX extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleX: 1
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new StretchOutX();
  }

}

exports.StretchOutX = StretchOutX;

class StretchOutY extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleY: 1
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new StretchOutY();
  }

}

exports.StretchOutY = StretchOutY;
//# sourceMappingURL=Stretch.js.map