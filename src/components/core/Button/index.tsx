import * as React from 'react';
import { StyleSheet, TouchableOpacityProps, View } from 'react-native';

// Components
import Lottie from './Lottie';
import Inner from './Inner';

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

    const style = [
        styles.container,
        props.position && styles[props.position],
        props.small && styles.small,
        props.style,
    ];

    if (state === 2) {
        return (
            <View style={style}>
                <View style={styles.animation}>
                    <Lottie
                        callback={() => setTimeout(() => setState(0), 1000)}
                    />
                </View>
            </View>
        );
    }

    return <Inner {...props} style={style} state={state} />;
};

const styles: any = StyleSheet.create({
    container: {
        height: 45,
    },
    small: {
        height: 30,
    },
    start: {
        alignSelf: 'flex-start',
    },
    end: {
        alignSelf: 'flex-end',
    },
    animation: {
        height: 150,
        width: 150,
        transform: [{ translateY: -50 }, { translateX: 50 }],
        alignSelf: 'center',
    },
});
