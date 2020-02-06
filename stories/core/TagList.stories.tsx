import * as React from 'react';

// Library
import { TagList, Tag } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/TagList',
    decorators: [Container],
};

export const normal = () => (
    <TagList>
        <Tag onPress={() => {}}>Broadway</Tag>
        <Tag onPress={() => {}}>Comic Con</Tag>
        <Tag onPress={() => {}}>DC</Tag>
        <Tag onPress={() => {}}>Disney</Tag>
        <Tag onPress={() => {}}>HBO</Tag>
    </TagList>
);
