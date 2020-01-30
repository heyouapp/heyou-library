import * as React from 'react';

// Library
import { Share } from 'components/common';
import { Container } from '../decorators';

export default {
    title: 'Common/Share',
    decorators: [Container],
};

export const normal = () => <Share />;
