import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    View,
    TouchableHighlight
} from 'react-native';

// Library
import { Colors } from 'utils';
import { Text, Icon } from 'components/core';

export interface TagProps {
    children: string;
    active?: boolean;
    delete?: boolean;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const Tag: React.FC<TagProps> = props => {
    const [pressed, setPressed] = React.useState(false);

    return (
        <TouchableHighlight
            activeOpacity={1}
            onPress={props.onPress}
            disabled={!props.onPress}
            onHideUnderlay={() => setPressed(false)}
            onShowUnderlay={() => setPressed(true)}
            underlayColor={Colors.primary}
            style={[
                styles.tag,
                props.active ? styles.tag_active : null,
                props.style
            ]}
        >
            <View style={styles.content}>
                <Text
                    style={[
                        styles.text,
                        props.active || pressed ? styles.text_active : null
                    ]}
                    small
                >
                    {props.children}
                </Text>
                {props.delete && (
                    <Icon
                        name="close"
                        color={
                            Colors[
                                props.active || pressed ? 'white' : 'primary'
                            ]
                        }
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
        alignSelf: 'flex-start'
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    tag_active: {
        backgroundColor: Colors.primary
    },
    text: {
        paddingHorizontal: 15,
        color: Colors.primary
    },
    text_active: {
        color: Colors.white
    },
    icon: {
        height: 10,
        width: 10,
        marginRight: 10
    }
});

export { Tag };
