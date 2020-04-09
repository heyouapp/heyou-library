// @ts-ignore
import { PasswordPolicy, charsets } from 'password-sheriff';

const Validations = {
    REQUIRED: (message: string) => ({
        required: {
            value: true,
            message,
        },
    }),
    NAME: (message: string) => ({
        minLength: {
            value: 3,
            message,
        },
        maxLength: {
            value: 30,
            message,
        },
    }),
    NICKNAME: (message: string) => ({
        minLength: {
            value: 3,
            message,
        },
        maxLength: {
            value: 30,
            message,
        },
    }),
    EMAIL: (message: string) => ({
        validate: (value: string) => value.indexOf('@') !== -1 || message,
    }),
    PASSWORD: (message: string) => ({
        validate:
            (async (value: string) => {
                const {
                    lowerCase,
                    upperCase,
                    numbers,
                    specialCharacters,
                } = charsets;

                const policy = new PasswordPolicy({
                    length: { minLength: 8 },
                    contains: {
                        expressions: [
                            lowerCase,
                            upperCase,
                            numbers,
                            specialCharacters,
                        ],
                    },
                });

                try {
                    await policy.assert(value);

                    return true;
                } catch (err) {
                    return false;
                }
            }) || message,
    }),
    FOLLOWERS: (message: string) => ({
        min: {
            value: 50000,
            message,
        },
    }),
};

export { Validations };
