import * as React from 'react';
import { Controller, ControllerProps, FieldError } from 'react-hook-form';
import { useIntl, MessageDescriptor } from 'react-intl';

// Library
import { Input } from 'components/core';
import { FormErrors } from 'utils';

type ControllerType = Partial<ControllerProps<React.ReactElement>>;
type Rule = ControllerType['rules'];

interface Props extends Omit<ControllerType, 'rules'> {
    rules?: Rule[] | Rule;
}

export const useControlledError = (
    name: string,
    error?: FieldError,
    messages: { [key: string]: Record<string, MessageDescriptor> } = FormErrors,
) => {
    const intl = useIntl();

    if (!error) {
        return;
    }

    const type: string = error.type;
    const message =
        (messages[name] && messages[name][type]) || messages.common[type];

    return intl.formatMessage(message) || 'Unknown error';
};

const ControlledInput: React.FC<Props> = ({
    messages = FormErrors,
    ...props
}) => {
    const { control, name, rules } = props;
    const error = control.errorsRef.current[name];
    const message = useControlledError(name, error, messages);
    const formattedRules = Array.isArray(rules)
        ? Object.assign({}, ...rules)
        : rules;

    return (
        <Controller
            name=""
            defaultValue=""
            as={Input}
            error={message}
            onChange={args => args[0].nativeEvent.text}
            {...props}
            rules={formattedRules}
        />
    );
};

export { ControlledInput };
