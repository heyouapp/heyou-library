import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Tag } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Tag',
    decorators: [Container],
};

export const normal = () => <Tag>Test</Tag>;

export const active = () => <Tag active>Test</Tag>;

export const charity = () => (
    <Tag onPress={action('clicked')} charity>
        Test Press
    </Tag>
);

export const withPress = () => (
    <Tag onPress={action('clicked')}>Test Press</Tag>
);

export const withDelete = () => (
    <Tag onPress={action('clicked')} delete>
        Test Delete
    </Tag>
);
