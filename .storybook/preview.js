import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { View } from 'react-native';
import './index.css';

addDecorator(
    withInfo({
        source: false,
        inline: true,
        propTablesExclude: [View],
    }),
);
