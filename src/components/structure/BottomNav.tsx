import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    SafeAreaView,
    Platform,
} from 'react-native';
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
    <SafeAreaView
        style={[
            styles.wrapper,
            Platform.OS === 'android' && styles.wrapper_android,
        ]}>
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
    </SafeAreaView>
);

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 15,
        right: 15,
    },
    wrapper_android: {
        bottom: 15,
    },
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
