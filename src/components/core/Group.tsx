import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export interface GroupProps {
    children: React.ReactNode;
    horizontal?: boolean;
    unit?: boolean;
}

const Group: React.FC<GroupProps> = ({ unit = 7, ...props }) => (
    <View style={[{ margin: -unit }, props.horizontal && styles.container]}>
        {React.Children.map(props.children, child =>
            React.cloneElement(child as React.ReactElement, {
                style: { margin: unit },
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
