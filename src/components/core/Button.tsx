import * as React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    View,
} from 'react-native';

// Library
import { Text } from './Text';
import { Lottie } from './Lottie';
import { Colors } from 'utils';

export interface ButtonProps extends TouchableOpacityProps {
    type?: 'primary' | 'secondary';
    position?: 'start' | 'end';
    small?: boolean;
    loading?: boolean;
    withAnimation?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {
    const [state, setState] = React.useState(0);
    const [loaded, setLoad] = React.useState(false);
    React.useEffect(() => {
        setLoad(true);
        if (props.loading === true) {
            setState(1);
        } else if (props.loading === false && loaded) {
            setState(props.withAnimation ? 2 : 0);
        }
    }, [props.loading]);

    return (
        <View
            style={[
                styles.container,
                props.position && styles[props.position],
                props.small && styles.smallContainer,
            ]}>
            {state === 2 ? (
                <Lottie callback={() => setState(0)} />
            ) : (
                <TouchableOpacity
                    {...props}
                    activeOpacity={0.7}
                    disabled={!!props.loading}
                    style={[
                        styles.button,
                        styles[props.type || 'primary'],
                        props.small && styles.small,
                        props.style,
                    ]}>
                    {state === 0 ? (
                        <Text
                            style={styles[`${props.type || 'primary'}_text`]}
                            type="semibold"
                            small>
                            {props.children}
                        </Text>
                    ) : (
                        <ActivityIndicator
                            color={
                                (props.type !== 'secondary' && Colors.white) ||
                                undefined
                            }
                        />
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        height: 45,
    },
    button: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
        height: '100%',
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    primary_text: {
        color: Colors.white,
    },
    secondary: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    secondary_text: {
        color: Colors.primary,
    },
    smallContainer: {
        height: 30,
    },
    small: {
        borderRadius: 15,
    },
    start: {
        alignSelf: 'flex-start',
    },
    end: {
        alignSelf: 'flex-end',
    },
});
