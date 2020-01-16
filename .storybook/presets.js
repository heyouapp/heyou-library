const { resolve } = require('path');

module.exports = [
    {
        name: '@storybook/preset-typescript',
        options: {
            tsDocgenLoaderOptions: {
                tsconfigPath: resolve(__dirname, '../tsconfig.json'),
                propFilter: prop => {
                    if (prop.parent) {
                        return !prop.parent.fileName.includes('node_modules');
                    }

                    return true;
                },
                shouldExtractLiteralValuesFromEnum: true
            },
            include: [resolve(__dirname, '../src')]
        }
    }
];
