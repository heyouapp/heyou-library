import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { RequestVideo } from 'components/common';
import { Container } from '../decorators';

const store = new Store({
    playing: false,
    onPlay: () => store.set({ playing: !store.get('playing') }),
});

export default {
    title: 'Common/RequestVideo',
    decorators: [withState(), Container],
    parameters: {
        state: {
            store,
        },
    },
};

export const normal = () => (
    <RequestVideo completedLabel="20/01/2020" onShare={action('shared')}>
        <View />
    </RequestVideo>
);

export const withReview = () => (
    <RequestVideo
        completedLabel="20/01/2020"
        onShare={action('shared')}
        review={{
            fullName: 'Mario Rossi',
            userName: 'mariorossi',
            rating: 3,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }}>
        <View />
    </RequestVideo>
);
