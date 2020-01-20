import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Notification } from 'components/common';

export default {
    title: 'Common|Notification'
};

export const normal = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdLabel="15 minutes ago"
    />
);

export const withAction = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdLabel="yesterday"
        onPress={action('clicked')}
    />
);
