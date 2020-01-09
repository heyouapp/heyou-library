import * as React from 'react';

// Library
import { Talent } from '../../components/account';

export default {
    title: 'Account|Talent'
};

export const normal = () => (
    <Talent fullName="Mario Rossi" principalTag="Comedian" price={50} />
);
