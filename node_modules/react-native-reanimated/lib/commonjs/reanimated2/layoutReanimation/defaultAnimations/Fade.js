"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeOutUp = exports.FadeOutRight = exports.FadeOutLeft = exports.FadeOutDown = exports.FadeOut = exports.FadeInUp = exports.FadeInRight = exports.FadeInLeft = exports.FadeInDown = exports.FadeIn = void 0;

var _animationBuilder = require("../animationBuilder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FadeIn extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return _ => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config))
          },
          initialValues: {
            opacity: 0,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeIn();
  }

}

exports.FadeIn = FadeIn;

class FadeInRight extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: 25
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeInRight();
  }

}

exports.FadeInRight = FadeInRight;

class FadeInLeft extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: -25
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeInLeft();
  }

}

exports.FadeInLeft = FadeInLeft;

class FadeInUp extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateY: -25
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeInUp();
  }

}

exports.FadeInUp = FadeInUp;

class FadeInDown extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateY: 25
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeInDown();
  }

}

exports.FadeInDown = FadeInDown;

class FadeOut extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return _ => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config))
          },
          initialValues: {
            opacity: 1,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeOut();
  }

}

exports.FadeOut = FadeOut;

class FadeOutRight extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(25, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeOutRight();
  }

}

exports.FadeOutRight = FadeOutRight;

class FadeOutLeft extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(-25, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }],
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new FadeOutLeft();
  }

}

exports.FadeOutLeft = FadeOutLeft;

class FadeOutUp extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateY: delayFunction(delay, animation(-25, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
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
    return new FadeOutUp();
  }

}

exports.FadeOutUp = FadeOutUp;

class FadeOutDown extends _animationBuilder.ComplexAnimationBuilder {
  constructor() {
    super(...arguments);

    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateY: delayFunction(delay, animation(25, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
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
    return new FadeOutDown();
  }

}

exports.FadeOutDown = FadeOutDown;
//# sourceMappingURL=Fade.js.map