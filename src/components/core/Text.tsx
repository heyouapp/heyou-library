import * as React from 'react';
import {
    StyleSheet,
    Text as RNText,
    TextProps as RNTextProps,
} from 'react-native';

// Library
import { Colors } from 'utils';

export interface TextProps extends RNTextProps {
    uppercase?: boolean;
    type?: 'regular' | 'semibold' | 'bold';
    small?: boolean;
}

export const TextStyle = {
    fontSize: 14,
    color: Colors.neutral,
    letterSpacing: 1,
};

const Text: React.FC<TextProps> = props => (
    <RNText
        {...props}
        {...{ small: undefined, type: undefined, uppercase: undefined }}
        style={[
            TextStyle,
            styles.text,
            styles[props.type || 'regular'],
            props.small ? styles.small : null,
            props.uppercase ? styles.uppercase : null,
            props.style,
        ]}
    />
);

const styles = StyleSheet.create({
    text: {
        lineHeight: 22,
    },
    small: {
        fontSize: 12,
        lineHeight: 18,
    },
    uppercase: {
        textTransform: 'uppercase',
    },
    regular: {
        fontWeight: '300',
    },
    semibold: {
        fontWeight: '600',
    },
    bold: {
        fontWeight: '700',
    },
});

export { Text };
