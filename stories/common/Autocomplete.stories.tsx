import * as React from 'react';

// Library
import { Autocomplete } from 'components/common';

export default {
    title: 'Common|Autocomplete'
};

export const normal = () => (
    <Autocomplete value="" onChangeText={() => {}} tags={[]} />
);
