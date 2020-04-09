import { defineMessages } from 'react-intl';

const FormErrors = defineMessages({
    common: {
        required: {
            id: 'ErrorFields.Common.required',
            defaultMessage: 'This field is required',
        },
        minLength: {
            id: 'ErrorFields.Common.minLength',
            defaultMessage: 'Invalid length',
        },
        maxLength: {
            id: 'ErrorFields.Common.maxLength',
            defaultMessage: 'Invalid length',
        },
        unknown: {
            id: 'ErrorFields.Common.unknown',
            defaultMessage: 'Unknown error',
        },
    },
    email: {
        validate: {
            id: 'ErrorFields.Email.validate',
            defaultMessage: 'Wrong email format',
        },
    },
    name: {
        minLength: {
            id: 'ErrorFields.Name.minLength',
            defaultMessage: 'It must be between 3 and 30 characters',
        },
        maxLength: {
            id: 'ErrorFields.Name.maxLength',
            defaultMessage: 'It must be between 3 and 30 characters',
        },
    },
    nickname: {
        minLength: {
            id: 'ErrorFields.Nickname.minLength',
            defaultMessage: 'It must be between 3 and 30 characters',
        },
        maxLength: {
            id: 'ErrorFields.Nickname.maxLength',
            defaultMessage: 'It must be between 3 and 30 characters',
        },
    },
    password: {
        validate: {
            id: 'ErrorFields.Password.validate',
            defaultMessage: 'Non valid password',
        },
    },
    repeatPassword: {
        validate: {
            id: 'ErrorFields.RepeatPassword.validate',
            defaultMessage: 'Both passwords must be equal',
        },
    },
    followers: {
        min: {
            id: 'ErrorFields.Followers.min',
            defaultMessage: 'You need at least 50k followers',
        },
    },
});

export { FormErrors };
