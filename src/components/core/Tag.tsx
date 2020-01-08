import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Library
import { Colors } from 'utils';
import { Text, Icon } from 'components/core';

export interface TagProps {
    children: string;
    active?: boolean;
    onDelete?: () => void;
}

const Tag: React.FC<TagProps> = props => (
    <TouchableOpacity
        style={[styles.tag, props.active ? styles.tag_active : null]}
        onPress={props.onDelete}
        disabled={!props.onDelete}
        activeOpacity={0.7}
    >
        <Text
            style={[styles.text, props.active ? styles.text_active : null]}
            small
        >
            {props.children}
        </Text>
        {props.onDelete && (
            <Icon
                name="close"
                color={Colors[props.active ? 'white' : 'primary']}
                style={styles.icon}
            />
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    tag: {
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 15,
        backgroundColor: Colors.white,
        height: 30,
        margin: 3.75,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start'
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
