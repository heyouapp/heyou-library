import * as React from 'react';

// Library
import { Header } from 'components/structure';
import { Container } from '../decorators';

export default {
    title: 'Structure/Header',
    decorators: [Container],
};

export const primary = () => <Header title="Test" />;

export const white = () => <Header title="Test" theme="white" />;

export const withBack = () => <Header title="Test" onPressBack={() => {}} />;

export const withClose = () => (
    <Header title="Test" onPressBack={() => {}} onPressClose={() => {}} />
);
