import * as React from 'react';

// Library
import { Text } from 'components/core';

export default {
    title: 'Core|Text',
};

export const normal = () => <Text>Test text</Text>;

export const withType = () => <Text type="bold">Test text</Text>;

export const small = () => <Text small>Test text</Text>;

export const uppercase = () => <Text uppercase>Test text</Text>;
