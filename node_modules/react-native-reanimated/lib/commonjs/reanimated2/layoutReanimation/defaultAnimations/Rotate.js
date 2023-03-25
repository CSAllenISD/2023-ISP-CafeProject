"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateOutUpRight = exports.RotateOutUpLeft = exports.RotateOutDownRight = exports.RotateOutDownLeft = exports.RotateInUpRight = exports.RotateInUpLeft = exports.RotateInDownRight = exports.RotateInDownLeft = void 0;

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RotateInDownLeft extends _animationBuilder.ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '-90deg'
            }, {
              translateX: values.targetWidth / 2 - values.targetHeight / 2
            }, {
              translateY: -(values.targetWidth / 2 - values.targetHeight / 2)
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateInDownLeft();
  }

}

exports.RotateInDownLeft = RotateInDownLeft;

class RotateInDownRight extends _animationBuilder.ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '90deg'
            }, {
              translateX: -(values.targetWidth / 2 - values.targetHeight / 2)
            }, {
              translateY: -(values.targetWidth / 2 - values.targetHeight / 2)
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateInDownRight();
  }

}

exports.RotateInDownRight = RotateInDownRight;

class RotateInUpLeft extends _animationBuilder.ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '90deg'
            }, {
              translateX: values.targetWidth / 2 - values.targetHeight / 2
            }, {
              translateY: values.targetWidth / 2 - values.targetHeight / 2
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateInUpLeft();
  }

}

exports.RotateInUpLeft = RotateInUpLeft;

class RotateInUpRight extends _animationBuilder.ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '-90deg'
            }, {
              translateX: -(values.targetWidth / 2 - values.targetHeight / 2)
            }, {
              translateY: values.targetWidth / 2 - values.targetHeight / 2
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateInUpRight();
  }

}

exports.RotateInUpRight = RotateInUpRight;

class RotateOutDownLeft extends _animationBuilder.ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('90deg', config))
            }, {
              translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }, {
              translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateOutDownLeft();
  }

}

exports.RotateOutDownLeft = RotateOutDownLeft;

class RotateOutDownRight extends _animationBuilder.ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('-90deg', config))
            }, {
              translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }, {
              translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateOutDownRight();
  }

}

exports.RotateOutDownRight = RotateOutDownRight;

class RotateOutUpLeft extends _animationBuilder.ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('-90deg', config))
            }, {
              translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }, {
              translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateOutUpLeft();
  }

}

exports.RotateOutUpLeft = RotateOutUpLeft;

class RotateOutUpRight extends _animationBuilder.ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('90deg', config))
            }, {
              translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }, {
              translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new RotateOutUpRight();
  }

}

exports.RotateOutUpRight = RotateOutUpRight;
//# sourceMappingURL=Rotate.js.map