import * as React from 'react';
import InputMask from 'react-input-mask';

// Library
import { Input, InputProps } from 'components/core';

const BirthdayInput: React.FC<InputProps> = props => (
    <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
        <Input {...props} />
    </InputMask>
);

export { BirthdayInput };
