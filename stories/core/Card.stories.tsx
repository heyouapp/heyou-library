import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Card, Text } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Card',
    decorators: [Container],
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
