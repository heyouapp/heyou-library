import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';

// Library
import { RequestVideo } from 'components/common';
import { Controlled } from '../decorators';

export default {
    title: 'Common|RequestVideo',
};

export const normal = () => (
    <Controlled
        initialState={false}
        keyValue="volume"
        keyOnChange="onVolumeChange"
    >
        <RequestVideo completedLabel="20/01/2020" onShare={action('shared')}>
            <View />
        </RequestVideo>
    </Controlled>
);

export const withReview = () => (
    <Controlled
        initialState={false}
        keyValue="volume"
        keyOnChange="onVolumeChange"
    >
        <RequestVideo
            completedLabel="20/01/2020"
            onShare={action('shared')}
            review={{
                fullName: 'Mario Rossi',
                userName: 'mariorossi',
                rating: 3,
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }}
        >
            <View />
        </RequestVideo>
    </Controlled>
);
