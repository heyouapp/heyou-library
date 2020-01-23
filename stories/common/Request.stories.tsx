import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Request } from 'components/common';

export default {
    title: 'Common|Request',
};

export const normal = () => (
    <Request
        fullName="Mario Rossi"
        recipientLabel="For: John Mark"
        status="10 days left to respond"
        buttonText="View request"
        onPress={action('clicked')}
    />
);
