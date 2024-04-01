import {Meta} from '@storybook/react';
import {TryAgain} from '../../src/common/components/TryAgain';

const meta = {
    component: TryAgain,
    title: 'Try Again',
    args: {
        onPress: () => {
            console.warn('pressed');
        },
    }
} satisfies Meta<typeof TryAgain>;

export default meta;
