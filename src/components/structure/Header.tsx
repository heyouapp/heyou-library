import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableWithoutFeedback
} from 'react-native';

// Library
import { Text, Icon } from 'components';
import { Colors } from 'utils';

export interface HeaderProps {
    title: React.ReactNode | string;
    theme?: 'white' | 'primary';
    onPressBack?: () => void;
    onPressClose?: () => void;
}

const Header = (props: HeaderProps) => {
    const styles = generateTheme(
        Colors[props.theme === 'white' ? 'white' : 'primary'],
        Colors[props.theme === 'white' ? 'neutral' : 'white']
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.content}>
                    {!!props.onPressBack && (
                        <TouchableWithoutFeedback
                            onPress={props.onPressBack}
                            disabled={!props.onPressBack}
                        >
                            <Icon name="arrowBack" style={styles.icon} />
                        </TouchableWithoutFeedback>
                    )}
                    <Text style={styles.title} type="bold">
                        {props.title}
                    </Text>
                    {!!props.onPressClose && (
                        <TouchableWithoutFeedback
                            onPress={props.onPressClose}
                            disabled={!props.onPressClose}
                        >
                            <Icon name="close" style={styles.icon} />
                        </TouchableWithoutFeedback>
                    )}
                </View>
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
            marginBottom: 25,
            overflow: 'hidden'
        },
        container: {
            height: 50,
            paddingTop: 15
        },
        content: {
            position: 'relative',
            height: 20,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
        },
        title: {
            position: 'absolute',
            left: 0,
            right: 0,
            fontSize: 16,
            color: contentColor,
            textAlign: 'center'
        },
        icon: {
            height: 16,
            tintColor: contentColor
        }
    });

export { Header };
