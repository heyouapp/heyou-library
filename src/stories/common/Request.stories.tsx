import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Request } from '../../components/common';

export default {
    title: 'Common|Request'
};

export const normal = () => (
    <Request
        fullName="Mario Rossi"
        recipientName="John Mark"
        createdAt=""
        completedAt=""
        expiresAt="Thu Feb 9 2020 03:00:00 GMT+0100"
        refusedAt=""
        status="pending"
        onPress={action('clicked')}
    />
);
