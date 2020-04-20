import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Library
import { Input, InputProps } from 'components/core';

type InputType = Partial<InputProps>;
interface BirthdayInputProps {
    inputProps: InputType;
    onDateChange: (value: Date) => void;
    value: Date;
}

interface CustomInputProps {
    inputProps: InputType;
    onClick?: () => void;
    value?: string;
}

const CustomInput = React.forwardRef(
    (props: CustomInputProps, ref: React.Ref<TouchableWithoutFeedback>) => (
        <TouchableWithoutFeedback onPress={props.onClick} ref={ref}>
            <Input
                {...props.inputProps}
                value={props.value}
                placeholder="dd/mm/yyyy"
            />
        </TouchableWithoutFeedback>
    ),
);

const BirthdayInput: React.FC<BirthdayInputProps> = props => (
    <DatePicker
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput inputProps={props.inputProps} />}
        onChange={props.onDateChange}
        selected={props.value}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
    />
);

export { BirthdayInput };
