import {Meta} from '@storybook/react';
import {ImagesList} from '../components/ImagesList';
import {ImageResources} from '../../src/common/ImageResources.g';

const meta = {
    component: ImagesList,
    title: 'Resources',
    args: {
        data: Object.entries(ImageResources),
    }
} satisfies Meta<typeof ImagesList>;

export default meta;
