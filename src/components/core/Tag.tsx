import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    View,
    TouchableHighlight,
} from 'react-native';

// Library
import { Colors } from 'utils';
import { Text } from './Text';
import { Icon } from './Icon';

export interface TagProps {
    children: string;
    delete?: boolean;
    onPress?: () => void;
    active?: boolean;
    charity?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Tag: React.FC<TagProps> = props => {
    const [pressed, setPressed] = React.useState(false);
    const condition = pressed || props.charity || props.active;

    return (
        <TouchableHighlight
            activeOpacity={props.charity ? 0.7 : 1}
            onPress={props.onPress}
            disabled={!props.onPress}
            onHideUnderlay={() => setPressed(false)}
            onShowUnderlay={() => setPressed(true)}
            underlayColor={Colors[props.charity ? 'charity' : 'primary']}
            style={[
                styles.tag,
                props.active && styles.tag_active,
                props.charity && styles.tag_charity,
                props.style,
            ]}>
            <View style={styles.content}>
                <Text
                    style={[styles.text, condition && styles.text_white]}
                    small>
                    {props.children}
                </Text>
                {props.delete && (
                    <Icon
                        name="close"
                        color={Colors[condition ? 'white' : 'primary']}
                        style={styles.icon}
                    />
                )}
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    tag: {
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 15,
        backgroundColor: Colors.white,
        height: 30,
        margin: 3.75,
        alignSelf: 'flex-start',
    },
    tag_charity: {
        borderColor: 'transparent',
        backgroundColor: Colors.charity,
    },
    tag_active: {
        backgroundColor: Colors.primary,
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        paddingHorizontal: 15,
        color: Colors.primary,
    },
    text_white: {
        color: Colors.white,
    },
    icon: {
        marginRight: 10,
    },
});

export { Tag };
