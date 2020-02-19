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
    theme?: 'white' | 'primary';
    onPressBack?: () => void;
    onPressClose?: () => void;
    renderRight?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
    const styles = generateTheme(
        Colors[props.theme === 'white' ? 'white' : 'primary'],
        Colors[props.theme === 'white' ? 'neutral' : 'white'],
    );

    return (
        <SafeAreaView
            style={[
                styles.wrapper,
                Platform.OS === 'android' && styles.wrapper_android,
                props.style,
            ]}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View>
                        {!!props.onPressBack && (
                            <TouchableWithoutFeedback
                                onPress={props.onPressBack}
                                disabled={!props.onPressBack}>
                                <View>
                                    <Icon
                                        name="arrowBack"
                                        style={styles.icon}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        )}
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
                    {props.renderRight ? (
                        props.renderRight
                    ) : (
                        <View>
                            {!!props.onPressClose && (
                                <TouchableWithoutFeedback
                                    onPress={props.onPressClose}
                                    disabled={!props.onPressClose}>
                                    <View>
                                        <Icon
                                            name="close"
                                            style={styles.icon}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        </View>
                    )}
                </View>
                {props.children}
            </View>
        </SafeAreaView>
    );
};

const generateTheme = (principalColor: string, contentColor: string) =>
    StyleSheet.create({
        wrapper: {
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            backgroundColor: principalColor,
            overflow: 'hidden',
        },
        wrapper_android: {
            paddingTop: 30,
        },
        container: {
            minHeight: 50,
            paddingTop: 15,
        },
        content: {
            position: 'relative',
            height: 20,
            paddingHorizontal: 15,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        middle: {
            position: 'absolute',
            left: 45,
            right: 45,
        },
        title: {
            fontSize: 16,
            color: contentColor,
            textAlign: 'center',
        },
        icon: {
            height: 16,
            tintColor: contentColor,
        },
    });

export { Header };
