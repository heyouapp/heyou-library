import * as React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

// Library
import { Input } from 'components/core';

type ControllerType = Partial<ControllerProps<React.ReactElement>>;

interface Props extends Omit<ControllerType, 'rules'> {
    rules?: ControllerType['rules'][];
}

const ControlledInput: React.FC<Props> = props => {
    const errors = props.control && props.control.errorsRef.current;
    const error = errors && errors[props.name];

    return (
        <Controller
            name=""
            defaultValue=""
            as={Input}
            error={error && error['message']}
            onChange={args => args[0].nativeEvent.text}
            {...props}
            rules={Object.assign({}, ...(props.rules || []))}
        />
    );
};

export { ControlledInput };
