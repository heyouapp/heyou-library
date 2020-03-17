import * as React from 'react';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Loading = () => {
    const { width } = Dimensions.get('window');
    const [left] = React.useState(new Animated.Value(0));
    const [right] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        const startAnimation = () => {
            left.setValue(0);
            right.setValue(0);

            Animated.parallel([
                Animated.timing(left, {
                    toValue: 1,
                    duration: 4000,
                }),
                Animated.timing(right, {
                    toValue: 1,
                    duration: 3000,
                }),
            ]).start(startAnimation);
        };

        startAnimation();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.line,
                    {
                        left: left.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, 0, width],
                        }),
                        right: right.interpolate({
                            inputRange: [0, 1],
                            outputRange: [width, 0],
                        }),
                    },
                ]}>
                <LinearGradient
                    colors={[
                        '#feda75',
                        '#fa7e1e',
                        '#d62976',
                        '#962fbf',
                        '#4f5bd5',
                    ]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.gradient}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 4,
    },
    line: {
        position: 'absolute',
        top: 0,
        bottom: 0,
    },
    gradient: {
        flex: 1,
    },
});

export { Loading };
