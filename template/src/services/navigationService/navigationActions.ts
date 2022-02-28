import {Navigation} from "react-native-navigation";
import {Pages} from "~/navigation/pages";

const MULTIPLIER = 1.9;
const POP_MULTIPLIER = 1.0;
const LONG_DURATION = 540 * MULTIPLIER;
const SHORT_DURATION = 210 * MULTIPLIER;

const SPRING_CONFIG = {mass: 90, damping: 30, stiffness: 200};

export function navigateAnimated(item: any) {
  Navigation.push(Pages.main.id, {
    component: {
      name: Pages.settings.name,
      passProps: {...item},
      options: {
        animations: {
          push: {
            content: {
              alpha: {
                from: 0,
                to: 1,
                duration: SHORT_DURATION,
              },
            },
            sharedElementTransitions: [
              {
                fromId: `image${item.id}`,
                toId: `image${item.id}`,
                duration: LONG_DURATION,
                interpolation: {type: `decelerate`, factor: 5, ...SPRING_CONFIG},
              },
              {
                fromId: `text${item.id}`,
                toId: `text${item.id}Dest`,
                duration: LONG_DURATION,
                interpolation: {type: `decelerate`, factor: 5, ...SPRING_CONFIG},
              },
              {
                fromId: `backdrop${item.id}`,
                toId: `backdrop`,
                duration: LONG_DURATION,
                interpolation: {type: `accelerate`, ...SPRING_CONFIG},
              },
            ],
            elementTransitions: [
              {
                id: `description`,
                alpha: {
                  from: 0,
                  duration: SHORT_DURATION,
                },
                translationY: {
                  from: 16,
                  duration: SHORT_DURATION,
                },
              },
            ],
          },
          pop: {
            content: {
              alpha: {
                from: 1,
                to: 0,
                duration: SHORT_DURATION * POP_MULTIPLIER,
              },
            },
            sharedElementTransitions: [
              {
                fromId: `image${item.id}Dest`,
                toId: `image${item.id}`,
                duration: LONG_DURATION * POP_MULTIPLIER,
                interpolation: {type: "decelerate", factor: 15, ...SPRING_CONFIG},
              },
              {
                fromId: `text${item.id}`,
                toId: `text${item.id}Dest`,
                duration: LONG_DURATION * POP_MULTIPLIER,
                interpolation: {type: "decelerate", factor: 5, ...SPRING_CONFIG},
              },
            ],
            elementTransitions: [
              {
                id: "description",
                alpha: {
                  to: 0,
                  duration: SHORT_DURATION,
                },
                translationY: {
                  to: 16,
                  duration: SHORT_DURATION,
                },
              },

            ],
          },
        },
      },
    },
  });
}
