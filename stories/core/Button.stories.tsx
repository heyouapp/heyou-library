import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

// Library
import { Button } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Button',
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

export const loading = () => (
    <Button onPress={action('clicked')} loading={true}>
        Loading Button
    </Button>
);

const store = new Store({
    loading: false,
});

export const loadingWithAnimation = () => {
    const onPress = () => {
        store.set({ loading: true });

        setTimeout(() => {
            store.set({ loading: false });
        }, 2000);
    };

    return (
        <State store={store}>
            <Button
                onPress={onPress}
                loading={store.get('loading')}
                withAnimation={true}>
                Loading Button with Animation
            </Button>
        </State>
    );
};

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
