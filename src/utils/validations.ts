// @ts-ignore
import { PasswordPolicy, charsets } from 'password-sheriff';
import { isValid, parse } from 'date-fns';

const Validations = {
    REQUIRED: {
        required: true,
    },
    NAME: {
        minLength: 3,
        maxLength: 30,
    },
    NICKNAME: {
        minLength: 3,
        maxLength: 30,
    },
    EMAIL: {
        validate: (value: string) => value.indexOf('@') !== -1,
    },
    BIRTHDAY: {
        validate: (value: string) =>
            isValid(parse(value, 'dd/MM/yyyy', new Date())),
    },
    PASSWORD: {
        validate: async (value: string) => {
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
        },
    },
    FOLLOWERS: {
        min: 50000,
    },
};

export { Validations };
