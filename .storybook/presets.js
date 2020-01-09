module.exports = [
    {
        name: '@storybook/preset-create-react-app',
        options: {
            tsDocgenLoaderOptions: {
                propFilter: prop => {
                    if (prop.parent) {
                        return !prop.parent.fileName.includes('node_modules');
                    }

                    return true;
                },
                shouldExtractLiteralValuesFromEnum: true
            }
        }
    }
];
