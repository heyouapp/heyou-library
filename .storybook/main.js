const path = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');

module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                    propFilter: prop => {
                        if (prop.parent) {
                            return !prop.parent.fileName.includes(
                                'node_modules',
                            );
                        }

                        return true;
                    },
                    shouldExtractLiteralValuesFromEnum: true,
                },
                include: [path.resolve(__dirname, '../src')],
            },
        },
    ],
    webpackFinal: async main => {
        const config = withUnimodules(main, {
            projectRoot: path.resolve(__dirname, '../'),
        });

        config.resolve.alias['react-native-web/dist/exports/ViewPropTypes'] =
            'react-native/Libraries/Components/View/ViewPropTypes';

        config.resolve.alias['react-native-web/dist/exports/ColorPropType'] =
            'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

        if (config.mode === 'production') {
            config.output.publicPath = '';
        }

        return config;
    },
};
