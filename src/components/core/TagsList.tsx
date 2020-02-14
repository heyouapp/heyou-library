import * as React from 'react';
import { StyleSheet } from 'react-native';

// Library
import { Group } from './Group';
import { Text } from './Text';
import { Colors } from 'utils';

export interface TagsListProps {
    moreString: string;
    lessString: string;
    amountCollapsed?: number;
    children: React.ReactNode;
}

const TagsList: React.FC<TagsListProps> = props => {
    const [isCollapsed, setCollapse] = React.useState(true);
    const amount = props.amountCollapsed || 5;
    const arr = React.Children.toArray(props.children);

    return (
        <Group unit={4} horizontal>
            {[...arr].splice(0, isCollapsed ? amount : arr.length)}
            <Text
                small
                type="semibold"
                onPress={() => setCollapse(!isCollapsed)}
                style={styles.more}>
                {amount < arr.length &&
                    (isCollapsed ? props.moreString : props.lessString)}
            </Text>
        </Group>
    );
};

const styles = StyleSheet.create({
    more: {
        height: 30,
        color: Colors.primary,
        lineHeight: 30,
    },
});

export { TagsList };
