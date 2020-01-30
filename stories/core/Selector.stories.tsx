import * as React from 'react';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { Selector } from 'components/core';
import { Container } from '../decorators';

const store = new Store({
    value: 0,
    onChange: (value: number) => store.set({ value }),
});

export default {
    title: 'Core/Selector',
    decorators: [withState(), Container],
    parameters: {
        state: {
            store,
        },
    },
};

export const normal = () => <Selector data={['Label 1', 'Label 2']} />;
