import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Notification } from '../../components/common';

export default {
    title: 'Common|Notification'
};

export const normal = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdAt="Thu Jan 9 2020 03:00:00 GMT+0100"
    />
);

export const withAction = () => (
    <Notification
        label="Notification label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
imperdiet lacus ac lectus porttitor vehicula."
        createdAt="Thu Jan 9 2020 03:00:00 GMT+0100"
        onPress={action('clicked')}
    />
);
