import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    TouchableWithoutFeedback
} from 'react-native';

// Library
import { Text, Icon } from 'components/core';
import { Colors } from 'utils';

export interface ListItemProps {
    label: string;
    value?: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const ListItem = (props: ListItemProps) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
            {props.value === undefined && (
                <Text style={styles.label}>{props.label}</Text>
            )}
            {props.value && (
                <View>
                    <Text uppercase small>
                        {props.label}
                    </Text>
                    <Text style={styles.value}>{props.value}</Text>
                </View>
            )}
            <Icon name="arrowRightBold" style={styles.icon} />
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyLight,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    label: {
        color: Colors.neutralLight
    },
    value: {
        color: Colors.neutralLight
    },
    icon: {
        height: 10
    }
});

export { ListItem };
