import * as React from 'react';

// Library
import { Group } from 'components/helpers';

// Common
import './styles.css';

const Wrapper: React.FC<React.ReactNode> = props => (
    <div className="errorsOverlay">
        <Group unit={4}>{props.children}</Group>
    </div>
);

export default Wrapper;
