import * as React from 'react';

// Library
import { Group } from 'components/helpers';

const Wrapper: React.FC<React.ReactNode> = props => (
    <div style={style}>
        <Group unit={4}>{props.children}</Group>
    </div>
);

const style: React.CSSProperties = {
    position: 'fixed',
    right: 15,
    bottom: 15,
    zIndex: 999,
    width: 375,
};

export default Wrapper;
