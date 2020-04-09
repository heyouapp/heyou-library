import * as React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

// Library
import { Input } from 'components/core';

type ControllerType = ControllerProps<React.ReactElement>;
type Rules = ControllerType['rules'][];

interface ControlledInputProps {
    as?: ControllerType['as'];
    rules?: Rules;
    control: ControllerType['control'];
    name: ControllerType['name'];
}

const ControlledInput: React.FC<ControlledInputProps> = props => {
    const errors = props.control && props.control.errorsRef.current;
    const error = errors && errors[props.name];

    return (
        <Controller
            as={Input}
            error={error && error.message}
            defaultValue=""
            {...props}
            onChange={args => args[0].nativeEvent.text}
            rules={Object.assign({}, ...(props.rules || []))}
        />
    );
};

export { ControlledInput };
