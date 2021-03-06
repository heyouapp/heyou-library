import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';

// Library
import { Icon } from 'components/core';
import { Colors } from 'utils';

export interface ShareProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const Share: React.FC<ShareProps> = props => (
    <TouchableOpacity
        onPress={props.onPress}
        style={[styles.container, props.style]}
        activeOpacity={0.7}>
        <Icon name="share" color={Colors.white} size={15} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Colors.primary,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Share };
