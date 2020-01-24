import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';

// Library
import { Shadows } from 'utils';
import TabsBarIcon from './TabsBarIcon';

export type TabsBarOption = {
    iconName: string;
    onPress: () => void;
};

export interface TabsBarProps {
    data: TabsBarOption[];
    style?: StyleProp<ViewStyle>;
}

const TabsBar = (props: TabsBarProps) => {
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
            {props.data.map((item: TabsBarOption, index: number) => (
                <TabsBarIcon
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

export { TabsBar };
