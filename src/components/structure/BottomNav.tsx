import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

// Library
import { Shadows } from 'utils';
import { BottomNavIcon } from './BottomNavIcon';

export type BottomNavOption = {
    iconName: string;
    onPress: () => void;
    active: boolean;
};

export interface BottomNavProps {
    data: BottomNavOption[];
    style?: StyleProp<ViewStyle>;
}

const BottomNav: React.FC<BottomNavProps> = props => (
    <BlurView
        intensity={Platform.OS === 'android' ? 1000 : 80}
        style={styles.container}>
        {props.data.map((item: BottomNavOption, index: number) => (
            <BottomNavIcon
                name={item.iconName}
                active={item.active}
                onPress={item.onPress}
                key={index.toString()}
            />
        ))}
    </BlurView>
);

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
