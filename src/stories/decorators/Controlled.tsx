import * as React from 'react';

// Library
import { InputProps } from '../../components/core';

interface Props extends InputProps {
    children: any;
    initialState: any;
    keyValue: string;
    keyOnChange: string;
}

const Controlled = (props: Props) => {
    const [state, setState] = React.useState(props.initialState);

    return React.cloneElement(props.children, {
        [props.keyValue]: state,
        [props.keyOnChange]: (state: any) => setState(state)
    });
};

export { Controlled };
