import {AnimationOptions, Options} from "react-native-navigation";

const multiplier = 1.9;
const appAnimationConfig = {
  popMultiplier: 1.0,
  longDuration: 540 * multiplier,
  shortDuration: 210 * multiplier,
  springConfig: {mass: 90, damping: 30, stiffness: 200},
};

export type AnimatedItem = {from: string} & {to: string};
export type AppOptions = Options & {itemsToAnimate?: AnimatedItem[]};

export function getAnimationOptions(ids: AnimatedItem[]): {animations?: AnimationOptions} {
  if (!ids.length) {
    return {animations: undefined};
  }

  return {
    animations: {
      push: {
        content: {
          alpha: {
            from: 0,
            to: 1,
            duration: appAnimationConfig.shortDuration,
          },
        },
        sharedElementTransitions: ids.map((itemId) => ({
          fromId: itemId.from,
          toId: itemId.to,
          duration: appAnimationConfig.longDuration,
          interpolation: {type: "spring", factor: 5, ...appAnimationConfig.springConfig},
        })),
        elementTransitions: [
          {
            id: "description",
            alpha: {
              from: 0,
              duration: appAnimationConfig.shortDuration,
            },
            translationY: {
              from: 16,
              duration: appAnimationConfig.shortDuration,
            },
          },
        ],
      },
      pop: {
        content: {
          alpha: {
            from: 1,
            to: 0,
            duration: appAnimationConfig.shortDuration * appAnimationConfig.popMultiplier,
          },
        },
        sharedElementTransitions: ids.map((itemId) => ({
          fromId: itemId.to,
          toId: itemId.from,
          duration: appAnimationConfig.longDuration * appAnimationConfig.popMultiplier,
          interpolation: {type: "spring", factor: 15, ...appAnimationConfig.springConfig},
        })),
        elementTransitions: [
          {
            id: "description",
            alpha: {
              to: 0,
              duration: appAnimationConfig.shortDuration,
            },
            translationY: {
              to: 16,
              duration: appAnimationConfig.shortDuration,
            },
          },

        ],
      },
    },
  };
}
