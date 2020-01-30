import * as React from 'react';

// Library
import { Talent } from 'components/account';
import { Container } from '../decorators';

export default {
    title: 'Account/Talent',
    decorators: [Container],
};

export const normal = () => (
    <Talent
        fullName="Andrea Riseborough"
        mainTopic="Call Center Representative"
        talentFeeAmount={50}
        source={{
            uri:
                'http://pbs.twimg.com/profile_images/604741535775662080/8CEV1nXA.jpg',
        }}
    />
);
