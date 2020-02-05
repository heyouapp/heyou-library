import * as React from 'react';

// Library
import { Tabs } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Tabs',
    decorators: [Container],
};

export const normal = () => (
    <Tabs
        data={[
            {
                label: 'Label 1',
                onPress: () => {},
                active: true,
            },
            {
                label: 'Label 2',
                onPress: () => {},
                active: false,
            },
        ]}
    />
);
