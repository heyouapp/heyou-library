import * as React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { useIntl } from 'react-intl';

// Library
import { Input } from 'components/core';
import { FormErrors } from 'utils';

type ControllerType = Partial<ControllerProps<React.ReactElement>>;
type Rule = ControllerType['rules'];

interface Props extends Omit<ControllerType, 'rules'> {
    rules?: Rule[] | Rule;
}

const ControlledInput: React.FC<Props> = props => {
    const intl = useIntl();
    const errors = props.control && props.control.errorsRef.current;
    const error = errors[name];
    const rules = Array.isArray(props.rules)
        ? Object.assign({}, ...props.rules)
        : props.rules;

    const getControlledError = () => {
        const { name, messages = FormErrors } = props;

        const type = error['type'];
        const message =
            (messages[name] && messages[name][type]) ||
            messages['common'][type];

        return intl.formatMessage(message) || 'Unknown error';
    };

    return (
        <Controller
            name=""
            defaultValue=""
            as={Input}
            error={error && getControlledError()}
            onChange={args => args[0].nativeEvent.text}
            {...props}
            rules={rules}
        />
    );
};

export { ControlledInput };
