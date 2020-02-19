import * as React from 'react';

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

export const withBack = () => <Header title="Test" onPressBack={() => {}} />;

export const withClose = () => <Header title="Test" onPressClose={() => {}} />;

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
