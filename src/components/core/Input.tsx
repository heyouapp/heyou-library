import * as React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';

// Library
import { Text, TextStyle } from './Text';
import { Colors, Shadows } from 'utils';

export interface InputProps extends TextInputProps {
    label?: string;
    uppercase?: boolean;
    error?: string;
}

export const InputStyle = {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    backgroundColor: Colors.white,
    ...Shadows.secondary
};

export const InputInnerStyle = {
    height: '100%',
    width: '100%',
    paddingHorizontal: 15,
    color: Colors.greyDark,
    ...TextStyle
};

const Input: React.FC<InputProps> = props => (
    <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        <View
            style={[
                styles.input,
                props.error ? styles.input_error : null,
                props.multiline ? styles.input_multiline : null
            ]}
        >
            <TextInput
                {...props}
                placeholder={props.placeholder}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                placeholderTextColor={Colors.neutralLight}
                style={InputInnerStyle}
            />
        </View>
        {props.maxLength !== undefined && (
            <Text style={styles.counter} small>
                {(props.value && props.value.length) || 0}/{props.maxLength}
            </Text>
        )}
        <Text style={styles.error} small>
            {props.error}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 7.5
    },
    label: {
        marginBottom: 7.5
    },
    counter: {
        marginTop: 5,
        color: Colors.neutralLight,
        alignSelf: 'flex-end'
    },
    error: {
        marginTop: 7.5,
        color: Colors.error,
        textTransform: 'uppercase'
    },
    input: {
        ...InputStyle,
        height: 45
    },
    input_multiline: {
        height: 90
    },
    input_error: {
        borderColor: Colors.error
    }
});

export { Input };
