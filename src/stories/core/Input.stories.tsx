import * as React from 'react';

// Library
import { Input } from 'components/core';
import { Controlled } from '../decorators';

export default {
    title: 'Core|Input'
};

export const normal = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input />
    </Controlled>
);

export const withLabel = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input label="Label test" />
    </Controlled>
);

export const withLabelAndError = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input label="Label test" error="Error label" />
    </Controlled>
);
