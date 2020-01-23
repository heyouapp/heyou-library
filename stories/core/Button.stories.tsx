import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Button } from 'components/core';

// Decorators
import { Container } from '../decorators';

export default {
    title: 'Core|Button',
    decorators: [Container],
};

export const primary = () => (
    <Button onPress={action('clicked')}>Primary Button</Button>
);

export const secondary = () => (
    <Button onPress={action('clicked')} type="secondary">
        Secondary Button
    </Button>
);

export const startPosition = () => (
    <Button onPress={action('clicked')} position="start">
        Start Position Button
    </Button>
);

export const endPosition = () => (
    <Button onPress={action('clicked')} position="end">
        End Position Button
    </Button>
);

export const small = () => (
    <Button onPress={action('clicked')} small>
        Small Button
    </Button>
);
