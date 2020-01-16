import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { TabsBar } from '../../components/structure';

export default {
    title: 'Structure|TabsBar'
};

export const normal = () => (
    <TabsBar
        data={[
            { iconName: 'home', onPress: action('clicked home') },
            { iconName: 'stream', onPress: action('clicked stream') },
            {
                iconName: 'notifications',
                onPress: action('clicked notifications')
            },
            { iconName: 'profile', onPress: action('clicked profile') }
        ]}
    />
);
