import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { BottomNav } from 'components/structure';

export default {
    title: 'Structure|BottomNav',
};

export const normal = () => (
    <BottomNav
        data={[
            { iconName: 'home', onPress: action('clicked home') },
            { iconName: 'stream', onPress: action('clicked stream') },
            {
                iconName: 'notifications',
                onPress: action('clicked notifications'),
            },
            { iconName: 'profile', onPress: action('clicked profile') },
        ]}
    />
);
