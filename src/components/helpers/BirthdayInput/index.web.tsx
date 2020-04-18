import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Library
import { Input, InputProps } from 'components/core';

type InputType = Partial<InputProps>;
interface BirthdayInputProps {
    ref: void;
    inputProps: InputType;
    onDateChange: (value: Date) => void;
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

const BirthdayInput: React.FC<BirthdayInputProps> = props => {
    const [birthday, setBirthday] = React.useState(new Date());
    React.useEffect(() => {
        props.onDateChange(birthday);
    }, [props, birthday]);

    return (
        <DatePicker
            dateFormat="dd/MM/yyyy"
            customInput={<CustomInput inputProps={props.inputProps} />}
            onChange={(value: Date) => setBirthday(value)}
            selected={birthday}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
    );
};

export { BirthdayInput };
