function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ComplexAnimationBuilder } from '../animationBuilder';
export class SlideInRight extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(values.targetOriginX, config))
          },
          initialValues: {
            originX: values.targetOriginX + values.windowWidth,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideInRight();
  }

}
export class SlideInLeft extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(values.targetOriginX, config))
          },
          initialValues: {
            originX: values.targetOriginX - values.windowWidth,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideInLeft();
  }

}
export class SlideOutRight extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(Math.max(values.currentOriginX + values.windowWidth, values.windowWidth), config))
          },
          initialValues: {
            originX: values.currentOriginX,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideOutRight();
  }

}
export class SlideOutLeft extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(Math.min(values.currentOriginX - values.windowWidth, -values.windowWidth), config))
          },
          initialValues: {
            originX: values.currentOriginX,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideOutLeft();
  }

}
export class SlideInUp extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(values.targetOriginY, config))
          },
          initialValues: {
            originY: -values.windowHeight,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideInUp();
  }

}
export class SlideInDown extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(values.targetOriginY, config))
          },
          initialValues: {
            originY: values.targetOriginY + values.windowHeight,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideInDown();
  }

}
export class SlideOutUp extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(Math.min(values.currentOriginY - values.windowHeight, -values.windowHeight), config))
          },
          initialValues: {
            originY: values.currentOriginY,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideOutUp();
  }

}
export class SlideOutDown extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(Math.max(values.currentOriginY + values.windowHeight, values.windowHeight), config))
          },
          initialValues: {
            originY: values.currentOriginY,
            ...initialValues
          },
          callback: callback
        };
      };
    });
  }

  static createInstance() {
    return new SlideOutDown();
  }

}
//# sourceMappingURL=Slide.js.map