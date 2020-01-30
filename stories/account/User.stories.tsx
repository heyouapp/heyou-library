import * as React from 'react';

// Library
import { User } from 'components/account';
import { Container } from '../decorators';

export default {
    title: 'Account/User',
    decorators: [Container],
};

export const normal = () => (
    <User fullName="Mario Rossi" userName="mariorossi" />
);
