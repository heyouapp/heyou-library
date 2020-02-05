import * as React from 'react';
import {
    StyleSheet,
    Text as RNText,
    TextProps as RNTextProps,
} from 'react-native';

// Library
import { Colors, Typo } from 'utils';

export interface TextProps extends RNTextProps {
    uppercase?: boolean;
    type?: 'regular' | 'semibold' | 'bold';
    small?: boolean;
}

export const TextStyle = {
    fontSize: Typo.SIZE.REGULAR,
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
            props.small && styles.small,
            props.uppercase && styles.uppercase,
            props.style,
        ]}
    />
);

const styles = StyleSheet.create({
    text: {
        lineHeight: Typo.LINE_HEIGHT.REGULAR,
    },
    small: {
        fontSize: Typo.SIZE.SMALL,
        lineHeight: Typo.LINE_HEIGHT.SMALL,
    },
    uppercase: {
        textTransform: 'uppercase',
    },
    regular: {
        fontWeight: Typo.WEIGHT.REGULAR,
    },
    semibold: {
        fontWeight: Typo.WEIGHT.SEMIBOLD,
    },
    bold: {
        fontWeight: Typo.WEIGHT.BOLD,
    },
});

export { Text };
