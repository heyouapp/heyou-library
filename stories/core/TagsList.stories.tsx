import * as React from 'react';

// Library
import { TagsList, Tag } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/TagsList',
    decorators: [Container],
};

export const normal = () => (
    <TagsList moreString="+ More" lessString="- Less" amountCollapsed={5}>
        <Tag onPress={() => {}}>Broadway</Tag>
        <Tag onPress={() => {}}>Comic Con</Tag>
        <Tag onPress={() => {}}>DC</Tag>
        <Tag onPress={() => {}}>Disney</Tag>
        <Tag onPress={() => {}}>HBO</Tag>
        <Tag onPress={() => {}}>Broadway</Tag>
        <Tag onPress={() => {}}>Comic Con</Tag>
        <Tag onPress={() => {}}>DC</Tag>
        <Tag onPress={() => {}}>Disney</Tag>
        <Tag onPress={() => {}}>HBO</Tag>
    </TagsList>
);
