import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
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
        <BlurView
            tint="light"
            intensity={10}
            style={[styles.container, props.style]}
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
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        ...Shadows.primary,
    },
});

export { BottomNav };
