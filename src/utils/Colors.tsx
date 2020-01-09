export const Colors = {
    primary: '#504DE5',
    primaryLight: '#DDDCFF',
    neutral: '#3B566E',
    neutralLight: '#6F8BA4',
    placeholder: '#C0D1E1',
    error: '#E53D53',
    white: '#FFFFFF',
    black: '#000000',
    grey: '#989BA5',
    greyLight: '#F9F9F9',
    greyDark: '#636363'
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