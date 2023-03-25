"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Easing = void 0;

var _Bezier = require("./Bezier");

/**
 * A linear function, `f(t) = t`. Position correlates to elapsed time one to
 * one.
 *
 * http://cubic-bezier.com/#0,0,1,1
 */
function linear(t) {
  'worklet';

  return t;
}
/**
 * A simple inertial interaction, similar to an object slowly accelerating to
 * speed.
 *
 * http://cubic-bezier.com/#.42,0,1,1
 */


function ease(t) {
  'worklet';

  return (0, _Bezier.Bezier)(0.42, 0, 1, 1)(t);
}
/**
 * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
 * time.
 *
 * http://easings.net/#easeInQuad
 */


function quad(t) {
  'worklet';

  return t * t;
}
/**
 * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
 * time.
 *
 * http://easings.net/#easeInCubic
 */


function cubic(t) {
  'worklet';

  return t * t * t;
}
/**
 * A power function. Position is equal to the Nth power of elapsed time.
 *
 * n = 4: http://easings.net/#easeInQuart
 * n = 5: http://easings.net/#easeInQuint
 */


function poly(n) {
  'worklet';

  return t => {
    'worklet';

    return Math.pow(t, n);
  };
}
/**
 * A sinusoidal function.
 *
 * http://easings.net/#easeInSine
 */


function sin(t) {
  'worklet';

  return 1 - Math.cos(t * Math.PI / 2);
}
/**
 * A circular function.
 *
 * http://easings.net/#easeInCirc
 */


function circle(t) {
  'worklet';

  return 1 - Math.sqrt(1 - t * t);
}
/**
 * An exponential function.
 *
 * http://easings.net/#easeInExpo
 */


function exp(t) {
  'worklet';

  return Math.pow(2, 10 * (t - 1));
}
/**
 * A simple elastic interaction, similar to a spring oscillating back and
 * forth.
 *
 * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
 * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
 * times.
 *
 * http://easings.net/#easeInElastic
 */


function elastic() {
  'worklet';

  let bounciness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  const p = bounciness * Math.PI;
  return t => {
    'worklet';

    return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
  };
}
/**
 * Use with `Animated.parallel()` to create a simple effect where the object
 * animates back slightly as the animation starts.
 *
 * Wolfram Plot:
 *
 * - http://tiny.cc/back_default (s = 1.70158, default)
 */


function back() {
  'worklet';

  let s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;
  return t => {
    'worklet';

    return t * t * ((s + 1) * t - s);
  };
}
/**
 * Provides a simple bouncing effect.
 *
 * http://easings.net/#easeInBounce
 */


function bounce(t) {
  'worklet';

  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  }

  if (t < 2 / 2.75) {
    const t2 = t - 1.5 / 2.75;
    return 7.5625 * t2 * t2 + 0.75;
  }

  if (t < 2.5 / 2.75) {
    const t2 = t - 2.25 / 2.75;
    return 7.5625 * t2 * t2 + 0.9375;
  }

  const t2 = t - 2.625 / 2.75;
  return 7.5625 * t2 * t2 + 0.984375;
}
/**
 * Provides a cubic bezier curve, equivalent to CSS Transitions'
 * `transition-timing-function`.
 *
 * A useful tool to visualize cubic bezier curves can be found at
 * http://cubic-bezier.com/
 */


function bezier(x1, y1, x2, y2) {
  'worklet';

  return {
    factory: () => {
      'worklet';

      return (0, _Bezier.Bezier)(x1, y1, x2, y2);
    }
  };
}

function bezierFn(x1, y1, x2, y2) {
  'worklet';

  return (0, _Bezier.Bezier)(x1, y1, x2, y2);
}
/**
 * Runs an easing function forwards.
 */


function in_(easing) {
  'worklet';

  return easing;
}
/**
 * Runs an easing function backwards.
 */


function out(easing) {
  'worklet';

  return t => {
    'worklet';

    return 1 - easing(1 - t);
  };
}
/**
 * Makes any easing function symmetrical. The easing function will run
 * forwards for half of the duration, then backwards for the rest of the
 * duration.
 */


function inOut(easing) {
  'worklet';

  return t => {
    'worklet';

    if (t < 0.5) {
      return easing(t * 2) / 2;
    }

    return 1 - easing((1 - t) * 2) / 2;
  };
}

const EasingObject = {
  linear,
  ease,
  quad,
  cubic,
  poly,
  sin,
  circle,
  exp,
  elastic,
  back,
  bounce,
  bezier,
  bezierFn,
  in: in_,
  out,
  inOut
};
const Easing = EasingObject;
exports.Easing = Easing;
//# sourceMappingURL=Easing.js.map