import * as React from 'react';
import { Component, ComponentProps } from './Component';

const SnapError = (props: ComponentProps) => (
    <div style={{ position: 'relative', bottom: 15, right: 15, width: 400 }}>
        <Component {...props} />
    </div>
);

export { SnapError };
