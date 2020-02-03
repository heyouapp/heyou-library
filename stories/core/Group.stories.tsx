import * as React from 'react';

// Library
import { Group, Button } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Group',
    decorators: [Container],
};

export const normal = () => (
    <Group>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
    </Group>
);

export const horizontal = () => (
    <Group horizontal>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
    </Group>
);

export const withLargerUnit = () => (
    <Group unit={30}>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
    </Group>
);
