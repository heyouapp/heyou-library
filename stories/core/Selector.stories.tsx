import * as React from 'react';

// Library
import { Selector } from 'components/core';
import { Controlled } from '../decorators';

export default {
    title: 'Core|Selector',
};

export const normal = () => (
    <Controlled keyValue="value" keyOnChange="onChange" initialState={0}>
        <Selector data={['Label 1', 'Label 2']} />
    </Controlled>
);
