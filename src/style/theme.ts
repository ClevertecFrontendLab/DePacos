import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: 'Inter, system-ui, Arial, sans-serif',
        body: 'Inter, system-ui, Arial, sans-serif',
    },
    colors: {
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            150: '#d7ff94',
            300: '#c4ff61',
            400: '#b1ff2e',
            600: '#2db100',
            800: '#134b00',
        },

        black: {
            200: 'rgba(0, 0, 0, 0.08)',
            600: 'rgba(0, 0, 0, 0.48)',
            700: 'rgba(0, 0, 0, 0.64)',
            900: 'rgba(0, 0, 0, 0.92)',
        },

        white: {
            900: '#fff',
        },
    },

    breakpoints: {
        base: '0px',
        sm: '360px',
        '2sm': '480px',
        md: '768px',
        lg: '991px',
        '2lg': '1200px',
        xl: '1440px',
        '2xl': '1920px',
    },
});
