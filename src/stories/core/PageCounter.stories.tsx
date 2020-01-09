import * as React from 'react';

// Library
import { PageCounter } from 'components/core';

export default {
    title: 'Core|PageCounter'
};

export const normal = () => <PageCounter amount={5} active={2} />;
