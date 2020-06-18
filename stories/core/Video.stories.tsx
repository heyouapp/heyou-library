import * as React from 'react';
import { View } from 'react-native';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { Video } from 'components/core';
import { Container } from '../decorators';

const store = new Store({
    playing: false,
    onPlay: () => store.set({ playing: !store.get('playing') }),
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
    <View style={{ width: 300 }}>
        <Video />
    </View>
);
