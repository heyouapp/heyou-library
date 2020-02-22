import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Text } from 'components/core';
import {
    ProfilePicture,
    ProfilePictureSizes,
    ProfilePictureSizeType,
} from './ProfilePicture';
import { Colors, ColorOpacity } from 'utils';

export interface TalentProps {
    fullName: string;
    mainTopic: string;
    talentFeeAmount: number;
    onPress?: () => void;
    size?: ProfilePictureSizeType;
    source?: ImageSourcePropType;
    horizontal?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Talent: React.FC<TalentProps> = props => {
    const size = props.size || 'xl';

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                props.horizontal && styles.horizontal,
                { width: ProfilePictureSizes[size].width },
                props.style,
            ]}
            activeOpacity={0.7}>
            <ProfilePicture size={size} source={props.source}>
                <View style={styles.price}>
                    <Text type="semibold" style={styles.price_inner} small>
                        {props.talentFeeAmount}€
                    </Text>
                </View>
            </ProfilePicture>
            <View style={props.horizontal && styles.info}>
                <Text style={styles.type} uppercase small numberOfLines={1}>
                    {props.mainTopic}
                </Text>
                <Text numberOfLines={1}>{props.fullName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        position: 'absolute',
        top: 5,
        right: 5,
        borderRadius: 5,
        backgroundColor: ColorOpacity(Colors.black, 0.4),
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    price_inner: {
        color: Colors.white,
    },
    type: {
        marginVertical: 2,
        color: Colors.neutralLight,
    },
    info: {
        marginLeft: 15,
    },
});

export { Talent };
