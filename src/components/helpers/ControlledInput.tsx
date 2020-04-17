import * as React from 'react';
import { Controller, ControllerProps, FieldError } from 'react-hook-form';
import { useIntl, MessageDescriptor } from 'react-intl';

// Library
import { Input } from 'components/core';
import { FormErrors } from 'utils';

type ControllerType = Partial<ControllerProps<React.ReactElement>>;
type Rule = ControllerType['rules'];

interface ControlledInputProps extends Omit<ControllerType, 'rules'> {
    name: string;
    rules?: Rule[] | Rule;
}

export const getControlledError = (
    field: string,
    errors: { [key: string]: FieldError },
    messages: { [key: string]: Record<string, MessageDescriptor> },
) => {
    const type: string = errors[field] && errors[field]['type'];

    return (
        type &&
        ((messages[field] && messages[field][type]) || messages.common[type])
    );
};

const ControlledInput: React.FC<ControlledInputProps> = ({
    messages = FormErrors,
    ...props
}) => {
    const errors = props.control.errorsRef.current;
    const intl = useIntl();

    const message = getControlledError(props.name, errors, messages);
    const formattedRules = Array.isArray(props.rules)
        ? Object.assign({}, ...props.rules)
        : props.rules;

    return (
        <Controller
            as={Input}
            onChange={args => args[0].nativeEvent.text}
            error={message && intl.formatMessage(message)}
            defaultValue=""
            {...props}
            rules={formattedRules}
        />
    );
};

export { ControlledInput };
