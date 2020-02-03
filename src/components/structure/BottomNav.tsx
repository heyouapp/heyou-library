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
    active: boolean;
};

export interface BottomNavProps {
    data: BottomNavOption[];
    style?: StyleProp<ViewStyle>;
}

const BottomNav: React.FC<BottomNavProps> = props => (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
            <BlurView intensity={80} style={styles.content}>
                {props.data.map((item: BottomNavOption, index: number) => (
                    <BottomNavIcon
                        name={item.iconName}
                        active={item.active}
                        onPress={item.onPress}
                        key={index.toString()}
                    />
                ))}
            </BlurView>
        </View>
    </SafeAreaView>
);

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
    content: {
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});

export { BottomNav };
