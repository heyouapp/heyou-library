import * as React from 'react';

// Library
import { PageCounter } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/PageCounter',
    decorators: [Container],
};

export const normal = () => <PageCounter amount={5} active={2} />;
