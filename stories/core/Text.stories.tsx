import * as React from 'react';

// Library
import { Text } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Text',
    decorators: [Container],
};

export const normal = () => <Text>Test text</Text>;

export const withType = () => <Text type="bold">Test text</Text>;

export const small = () => <Text small>Test text</Text>;

export const uppercase = () => <Text uppercase>Test text</Text>;
