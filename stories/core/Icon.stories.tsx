import * as React from 'react';

// Library
import { Icon } from 'components/core';
import { Colors } from 'utils';
import { Container } from '../decorators';

export default {
    title: 'Core/Icon',
    decorators: [Container],
};

export const normal = () => (
    <Icon name="profile" color={Colors.neutral} size={50} />
);
