import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

export interface GroupProps {
    children: React.ReactNode;
    horizontal?: boolean;
    unit?: boolean;
    style?: StyleProp<ViewStyle>;
}

const getMargin = (margin: number) => ({
    marginTop: margin,
    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
});

const Group: React.FC<GroupProps> = ({ unit = 7, ...props }) => (
    <View
        style={[
            getMargin(-unit),
            props.horizontal && styles.container,
            props.style,
        ]}
    >
        {React.Children.map(props.children, (child: any) =>
            React.cloneElement(child, {
                style: [child.props.style, getMargin(unit as number)],
            }),
        )}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export { Group };
