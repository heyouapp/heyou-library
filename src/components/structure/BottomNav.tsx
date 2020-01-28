import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    SafeAreaView,
    View,
} from 'react-native';
// import { BlurView } from '@react-native-community/blur';

// Library
import { Shadows, ColorOpacity, Colors } from 'utils';
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
    }, [active, props.data]);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                {/*
                 <BlurView
                     style={styles.absolute}
                     blurType="light"
                     blurAmount={10}
                 />*/}
                {props.data.map((item: BottomNavOption, index: number) => (
                    <BottomNavIcon
                        name={item.iconName}
                        active={active === index}
                        onPress={() => setActive(index)}
                        key={index.toString()}
                    />
                ))}
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
        backgroundColor: ColorOpacity(Colors.white, 0.7),
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        ...Shadows.primary,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export { BottomNav };
