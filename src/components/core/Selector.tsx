import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';

// Library
import { Colors } from 'utils';
import { Text } from './Text';

export interface SelectorProps {
    data: string[];
    value?: number;
    onChange?: (index: number) => void;
    style?: StyleProp<ViewStyle>;
}

const Selector: React.FC<SelectorProps> = props => {
    if (!props.data) {
        return null;
    }

    return (
        <View style={[styles.container, props.style]}>
            {props.data.map((item: string, index: number) => (
                <TouchableOpacity
                    onPress={() => props.onChange && props.onChange(index)}
                    disabled={!props.onChange}
                    style={[
                        styles.tab,
                        props.value === index && styles.tab_active,
                        index === 0 && styles.tab_start,
                        index === props.data.length - 1 && styles.tab_end,
                    ]}
                    key={index.toString()}
                    activeOpacity={0.7}
                >
                    <Text
                        style={[
                            styles.text,
                            props.value === index && styles.text_active,
                        ]}
                        type="bold"
                        small
                    >
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 30,
        marginLeft: 1,
        flexDirection: 'row',
    },
    tab: {
        borderWidth: 1,
        borderColor: Colors.primary,
        marginLeft: -1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tab_start: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    tab_end: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    tab_active: {
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.primary,
    },
    text_active: {
        color: Colors.white,
    },
});

export { Selector };
