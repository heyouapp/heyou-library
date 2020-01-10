import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    TouchableOpacity
} from 'react-native';

// Library
import { Text } from 'components/core';
import { ProfilePicture } from './ProfilePicture';
import { Colors, ColorOpacity } from 'utils';

export interface TalentProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    fullName: string;
    mainTopic: string;
    talentFeeAmount: number;
}

const Talent: React.FC<TalentProps> = props => (
    <TouchableOpacity
        onPress={props.onPress}
        style={props.style}
        activeOpacity={0.7}
    >
        <ProfilePicture size="large" squared>
            <View style={styles.price}>
                <Text type="semibold" style={styles.price_inner} small>
                    {props.talentFeeAmount}€
                </Text>
            </View>
        </ProfilePicture>
        <Text style={styles.type} uppercase small>
            {props.mainTopic}
        </Text>
        <Text>{props.fullName}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    price: {
        position: 'absolute',
        top: 5,
        right: 5,
        borderRadius: 5,
        backgroundColor: ColorOpacity(Colors.black, 0.4),
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    price_inner: {
        color: Colors.white
    },
    type: {
        marginVertical: 2,
        color: Colors.neutralLight
    }
});

export { Talent };
