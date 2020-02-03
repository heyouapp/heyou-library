import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';

// Library
import { Text } from './Text';
import { Icon } from './Icon';
import { Colors } from 'utils';

export interface ListItemProps {
    label: string;
    value?: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const ListItem: React.FC<ListItemProps> = props => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[styles.container, props.style]}
    >
        {props.value === undefined && (
            <Text style={styles.label}>{props.label}</Text>
        )}
        {!!props.value && (
            <View>
                <Text uppercase small>
                    {props.label}
                </Text>
                <Text style={styles.value}>{props.value}</Text>
            </View>
        )}
        <Icon name="arrowRightBold" style={styles.icon} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyLight,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    label: {
        color: Colors.neutralLight,
    },
    value: {
        color: Colors.neutralLight,
    },
    icon: {
        height: 10,
    },
});

export { ListItem };
