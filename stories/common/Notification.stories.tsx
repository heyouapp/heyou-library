import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Notification } from 'components/common';
import { Container } from '../decorators';

export default {
    title: 'Common/Notification',
    decorators: [Container],
};

export const normal = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdLabel="15 minutes ago"
    />
);

export const withSource = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdLabel="15 minutes ago"
        source={{}}
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
