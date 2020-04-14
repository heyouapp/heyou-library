import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

// Library
import { Input, InputProps } from 'components/core';

type InputType = Partial<InputProps>;
interface BirthdayInputProps {
    ref: void;
    inputProps: InputType;
    onDateChange: (value: string) => void;
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

const toFormat = (date: Date) => date && format(date, 'dd/MM/yyyy');

const BirthdayInput: React.FC<BirthdayInputProps> = props => {
    const [birthday, setBirthday] = React.useState(new Date());
    React.useEffect(() => {
        props.onDateChange(toFormat(birthday));
    }, [props, birthday]);

    return (
        <DatePicker
            dateFormat="dd/MM/yyyy"
            customInput={<CustomInput inputProps={props.inputProps} />}
            onChange={(value: Date) => setBirthday(value)}
            selected={birthday}
        />
    );
};

export { BirthdayInput };
