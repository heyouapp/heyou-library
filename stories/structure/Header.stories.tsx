import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Library
import { Header, HeaderInput } from 'components/structure';
import { Button } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Structure/Header',
    decorators: [Container],
};

export const primary = () => <Header title="Test" />;

export const white = () => <Header title="Test" theme="white" />;

export const charity = () => <Header title="Test" theme="charity" />;

export const withBack = () => (
    <Header title="Test" onPressBack={action('pressed back')} />
);

export const withClose = () => (
    <Header title="Test" onPressClose={action('pressed close')} />
);

export const withRightRender = () => (
    <Header
        title="Test"
        renderRight={
            <Button type="secondary" small>
                + Follow
            </Button>
        }
    />
);

export const withInput = () => (
    <Header title="Test" onPressBack={() => {}} onPressClose={() => {}}>
        <HeaderInput
            placeholder="Start typing here..."
            value=""
            onChangeText={() => {}}
        />
    </Header>
);
