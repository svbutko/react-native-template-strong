import {Meta} from '@storybook/react';
import {ColorPaletteList} from '../components/ColorPaletteList';

const meta = {
    component: ColorPaletteList,
    title: 'Platform Colors',
    args: {
        isPlatformColors: true,
    }
} satisfies Meta<typeof ColorPaletteList>;

export const CustomColors = {
    args: {
        isPlatformColors: false,
    },
};

export default meta;
