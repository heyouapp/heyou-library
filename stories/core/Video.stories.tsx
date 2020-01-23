import * as React from 'react';
import { View } from 'react-native';

// Library
import { Video } from 'components/core';

export default {
    title: 'Core|Video',
};

export const normal = () => (
    <Video volume={false} onVolumeChange={() => {}}>
        <View />
    </Video>
);
