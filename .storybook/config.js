import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { View } from 'react-native';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);

addDecorator(
    withInfo({
        inline: true,
        propTablesExclude: [View]
    })
);
