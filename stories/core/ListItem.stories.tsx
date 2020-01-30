import * as React from 'react';

// Library
import { ListItem } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/ListItem',
    decorators: [Container],
};

export const normal = () => <ListItem label="Test label" onPress={() => {}} />;

export const withValue = () => (
    <ListItem label="Test label" value="Test value" onPress={() => {}} />
);
