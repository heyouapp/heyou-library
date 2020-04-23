import * as React from 'react';
import InputMask from 'react-input-mask';

// Library
import { Input, InputProps } from 'components/core';

const BirthdayInput: React.FC<InputProps> = props => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        props.onChangeText && props.onChangeText(e.target.value);

    return (
        <InputMask
            mask="99/99/9999"
            value={props.value}
            onChange={handleChange}>
            <Input {...props} />
        </InputMask>
    );
};

export { BirthdayInput };
