import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { View } from 'react-native';
import './index.css';

addDecorator(
    withInfo({
        inline: true,
        propTablesExclude: [View],
    }),
);
