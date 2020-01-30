import * as React from 'react';
import { View } from 'react-native';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { Video } from 'components/core';
import { Container } from '../decorators';

const store = new Store({
    volume: false,
    onVolumeChange: () => store.set({ volume: !store.get('volume') }),
});

export default {
    title: 'Core/Video',
    decorators: [withState(), Container],
    parameters: {
        state: {
            store,
        },
    },
};

export const normal = () => (
    <Video>
        <View />
    </Video>
);
