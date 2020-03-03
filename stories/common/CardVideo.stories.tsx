import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { CardVideo } from 'components/common';
import { Container } from '../decorators';

const store = new Store({
    playing: false,
    onPlay: () => store.set({ playing: !store.get('playing') }),
});

export default {
    title: 'Common/CardVideo',
    decorators: [withState(), Container],
    parameters: {
        state: {
            store,
        },
    },
};

export const normal = () => (
    <CardVideo
        createdLabel="10/01/2020"
        recipientLabel="For Mario Rossi"
        onShare={action('shared')}>
        <View />
    </CardVideo>
);
