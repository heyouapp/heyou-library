import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Button, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface RequestProps {}

const Request: React.FC<RequestProps> = _props => (
    <Card style={styles.container}>
        <ProfilePicture size="medium" squared />
        <View style={styles.content}>
            <View>
                <Text type="semibold">Roxane Berwick</Text>
                <Text>For: Mariano</Text>
                <Text style={styles.time} small>
                    10 min left to respond
                </Text>
            </View>
            <Button onPress={() => {}} type="secondary" small>
                View Confirmation
            </Button>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    time: {
        color: Colors.neutralLight
    }
});

export { Request };
