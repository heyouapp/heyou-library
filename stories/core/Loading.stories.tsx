import * as React from 'react';

// Library
import { Loading } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Core/Loading',
    decorators: [Container],
};

export const normal = () => <Loading />;
