import * as React from 'react';
import {
    View,
    FlatList,
    FlatListProperties,
    ListRenderItemInfo,
} from 'react-native';

interface WrappedListProps extends FlatListProperties<any> {
    margin: number;
}

const WrappedList: React.FC<WrappedListProps> = props => (
    <FlatList
        {...props}
        renderItem={(_props?: ListRenderItemInfo<any>) => {
            const element = props.renderItem(_props);

            return (
                <View
                    style={{
                        flex: 1 / (props.numColumns || 1),
                    }}>
                    {React.cloneElement(element as React.ReactElement, {
                        style: [element.style, { margin: props.margin / 2 }],
                    })}
                </View>
            );
        }}
        contentContainerStyle={[
            { padding: props.margin / 2 },
            props.contentContainerStyle,
        ]}
        style={props.style}
    />
);

export { WrappedList };
