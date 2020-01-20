import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';

// Library
import { CardVideo } from 'components/common';
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
            createdLabel="10/01/2020"
            recipientLabel="For Mario Rossi"
            onShare={action('shared')}
        >
            <View />
        </CardVideo>
    </Controlled>
);
