import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    SafeAreaView,
    View,
} from 'react-native';
import { BlurView } from 'expo-blur';

// Library
import { Shadows } from 'utils';
import BottomNavIcon from './BottomNavIcon';

export type BottomNavOption = {
    iconName: string;
    onPress: () => void;
};

export interface BottomNavProps {
    data: BottomNavOption[];
    style?: StyleProp<ViewStyle>;
}

const BottomNav = (props: BottomNavProps) => {
    const [active, setActive] = React.useState(0);
    React.useEffect(() => {
        props.data[active].onPress();
    }, [active]);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <BlurView
                    tint="light"
                    intensity={80}
                    style={[styles.bar, props.style]}
                >
                    {props.data.map((item: BottomNavOption, index: number) => (
                        <BottomNavIcon
                            name={item.iconName}
                            active={active === index}
                            onPress={() => setActive(index)}
                            key={index.toString()}
                        />
                    ))}
                </BlurView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 15,
        right: 15,
    },
    container: {
        borderRadius: 20,
        ...Shadows.primary,
    },
    bar: {
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});

export { BottomNav };
