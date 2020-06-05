const Colors = {
    primary: '#361596',
    primaryLight: '#DDDCFF',
    secondary: '#FFCC3E',
    neutralDark: '#1A264A',
    neutral: '#3B566E',
    neutralLight: '#6F8BA4',
    placeholder: '#C0D1E1',
    inputSecondary: '#F2F5F8',
    error: '#E53D53',
    white: '#FFFFFF',
    greyLight: '#F0F0F0',
    grey: '#989BA5',
    greyDark: '#636363',
    black: '#000000',
    charity: '#96151D',
    facebook: '#1877F2',
};

// Tools
export const ColorOpacity = (hex: string, percentage: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
        const st = result.map(n => parseInt(n, 16));
        st.shift();

        return `rgba(${st.join(', ')}, ${percentage})`;
    }

    return 'rgba(0, 0, 0, 0)';
};

export { Colors };
