import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Card, Text } from 'components/core';

export default {
    title: 'Core|Card',
};

export const normal = () => (
    <Card>
        <Text>Test Text</Text>
    </Card>
);

export const withAction = () => (
    <Card onPress={action('clicked')}>
        <Text>Test Text</Text>
    </Card>
);
