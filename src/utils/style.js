import { css } from 'styled-components';

const sizes = {
    desktop: 992,
    landscape: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

const Theme = {
    black: '#2D2D2D',
    white: '#FDFDFD',
    primary: '#2D2D2D',
    secondary: '#FDFDFD',
};

export default Theme;