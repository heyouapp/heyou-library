import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    SafeAreaView,
    View,
    ViewStyle,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';

// Library
import { Text, Icon } from 'components';
import { Colors } from 'utils';

export interface HeaderProps {
    title: React.ReactNode;
    theme?: 'white' | 'primary' | 'charity';
    onPressBack?: () => void;
    onPressClose?: () => void;
    renderLeft?: React.ReactNode;
    renderRight?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
    const styles = generateTheme(
        Colors[props.theme || 'primary'],
        Colors[props.theme === 'white' ? 'neutral' : 'white'],
    );

    return (
        <SafeAreaView
            style={[
                styles.container,
                Platform.OS === 'android' && styles.container_android,
                props.style,
            ]}>
            <View style={styles.content}>
                <View>
                    {props.renderLeft ||
                        (props.onPressBack && (
                            <TouchableWithoutFeedback
                                onPress={props.onPressBack}>
                                <View style={styles.icon}>
                                    <Icon
                                        name="arrowBack"
                                        style={styles.icon_inner}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                </View>
                <View style={styles.middle}>
                    {typeof props.title === 'string' ? (
                        <Text
                            style={styles.title}
                            type="bold"
                            numberOfLines={1}>
                            {props.title}
                        </Text>
                    ) : (
                        props.title
                    )}
                </View>
                <View>
                    {props.renderRight ||
                        (props.onPressClose && (
                            <TouchableWithoutFeedback
                                onPress={props.onPressClose}>
                                <View style={styles.icon}>
                                    <Icon
                                        name="close"
                                        style={styles.icon_inner}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                </View>
            </View>
            {props.children}
        </SafeAreaView>
    );
};

const generateTheme = (principalColor: string, contentColor: string) =>
    StyleSheet.create({
        container: {
            backgroundColor: principalColor,
        },
        container_android: {
            paddingTop: 30,
        },
        content: {
            position: 'relative',
            height: 50,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        middle: {
            position: 'absolute',
            left: 45,
            right: 45,
        },
        side: {
            minWidth: 45,
            marginHorizontal: -15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 16,
            color: contentColor,
            textAlign: 'center',
        },
        icon: {
            height: 50,
            width: 45,
            marginHorizontal: -15,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon_inner: {
            height: 16,
            tintColor: contentColor,
        },
    });

export { Header };
