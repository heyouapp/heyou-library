import * as React from 'react';

// Library
import { ProfilePicture } from 'components/account';
import { Container } from '../decorators';

export default {
    title: 'Account/ProfilePicture',
    decorators: [Container],
};

export const smRounded = () => <ProfilePicture size="sm" rounded />;

export const sm = () => <ProfilePicture size="sm" />;

export const md = () => <ProfilePicture size="md" />;

export const lg = () => <ProfilePicture size="lg" />;

export const xl = () => <ProfilePicture size="xl" />;

export const xxl = () => <ProfilePicture size="xxl" />;
