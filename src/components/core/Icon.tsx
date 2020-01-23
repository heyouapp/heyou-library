import * as React from 'react';
import { StyleSheet, StyleProp, Image, ImageStyle } from 'react-native';

// Library
import { Colors, Icons } from 'utils';

export interface IconProps {
    name: string;
    color?: string;
    style?: StyleProp<ImageStyle>;
}

const Icon: React.FC<IconProps> = props => {
    const source = Icons[props.name];

    if (!source) {
        return null;
    }

    return (
        <Image
            source={source}
            style={[
                styles.icon,
                { tintColor: props.color || Colors.neutralLight },
                props.style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
});

export { Icon };
