import * as React from 'react';

// Library
import { Badge } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Badge',
    decorators: [Container],
};

export const normal = () => <Badge amount={20000} />;
