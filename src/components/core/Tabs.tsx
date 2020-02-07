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
import { Colors } from 'utils';

export type TabsItem = {
    label: string;
    onPress?: () => void;
    active: boolean;
};

export interface TabsProps {
    data: TabsItem[];
    style?: StyleProp<ViewStyle>;
}

const Tabs: React.FC<TabsProps> = props => (
    <View style={[styles.container, props.style]}>
        {props.data.map((item: TabsItem, index: number) => (
            <TouchableOpacity
                onPress={item.onPress}
                disabled={!item.onPress || item.active}
                activeOpacity={0.7}
                style={[styles.item, item.active && styles.item_active]}
                key={index.toString()}>
                <Text
                    style={[styles.text, item.active && styles.text_active]}
                    type="semibold"
                    small>
                    {item.label}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyLight,
        paddingHorizontal: 15,
        marginHorizontal: -30,
        flexDirection: 'row',
    },
    item: {
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        marginHorizontal: 15,
        marginBottom: -1,
    },
    item_active: {
        borderBottomColor: Colors.primary,
    },
    text: {
        marginBottom: 7,
        color: Colors.neutralLight,
    },
    text_active: {
        color: Colors.primary,
    },
});

export { Tabs };
