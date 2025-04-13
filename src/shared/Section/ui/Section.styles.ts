import { ResponsiveValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const getStyles = ({
    heading,
    textAlign,
    display,
    description,
}: {
    heading: string;
    display: string;
    textAlign: string;
    description: string | ReactNode | undefined;
}) => ({
    wrapper: (bgColor: string, margin: ResponsiveValue<string | undefined>) => ({
        backgroundColor: bgColor,
        textAlign,
        margin,
    }),

    inner: {
        display,
        ...(heading === 'h2' &&
            textAlign === 'left' && {
                marginBottom: { base: '12px', xl: '16px', '2xl': '24px' },
            }),
        ...(display === 'flex' &&
            textAlign === 'left' && {
                marginBottom: { base: '16px', xl: '24px' },
                flexDirection: { base: 'column', lg: 'row' },
                gap: { base: '12px' },
            }),
    },

    heading: {
        lineHeight: { base: '32px', '2lg': '48px' },
        ...(heading === 'h1' && {
            fontSize: { base: '24px', '2lg': '48px' },
            fontWeight: '700',
            marginBottom: description
                ? { base: '16px', '2lg': '12px' }
                : { base: '16px', '2lg': '32px' },
        }),
        ...(heading === 'h2' && {
            fontSize: { base: '24px', xl: '36px', '2xl': '48px' },
            fontWeight: '500',
            lineHeight: { base: '32px', xl: '40px', '2xl': '48px' },
        }),
        ...(display === 'flex' && {
            flex: { base: 'inherit', '2xl': '0 0 49.5%' },
            margin: { base: '0', xl: '0 2% 0 0', '2xl': '0' },
            maxWidth: { base: '298px', xl: '260px', '2xl': '100%' },
        }),
    },

    description: {
        fontSize: { base: '14px', lg: '16px' },
        fontWeight: '500',
        lineHeight: { base: '20px', lg: '24px' },
        opacity: '0.64',
        ...(textAlign === 'left' && {
            marginBottom: 0,
            maxWidth: { base: '100%', xl: '525px', '2xl': '630px' },
            letterSpacing: '0.3px',
        }),
        ...(textAlign === 'center' && {
            maxWidth: { base: '727px', xl: '696px' },
            margin: { base: '0 auto 16px auto', lg: '0 auto 32px auto' },
        }),
    },

    children: {
        flexBasis: '100%',
    },
});
