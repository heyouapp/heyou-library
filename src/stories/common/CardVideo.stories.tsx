import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';

// Library
import { CardVideo } from '../../components/common';
import { Controlled } from '../decorators';

export default {
    title: 'Common|CardVideo'
};

export const normal = () => (
    <Controlled
        initialState={false}
        keyValue="volume"
        keyOnChange="onVolumeChange"
    >
        <CardVideo
            createdAt="Thu Jan 9 2020 03:00:00 GMT+0100"
            recipientName="Mario Rossi"
            onShare={action('shared')}
        >
            <View />
        </CardVideo>
    </Controlled>
);
