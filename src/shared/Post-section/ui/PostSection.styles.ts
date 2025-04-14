export const styles = {
    wrapper: {
        backgroundColor: 'lime.300',
        padding: { base: '12px 12px 64px 12px', xl: '24px' },
        margin: { base: '0 0 42px 0', md: '0 0 40px 0', lg: '0 0 40px 0' },
        borderRadius: '16px',
        position: 'relative',
    },

    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: {
            base: '0 0 12px 0',
            xl: '0 0 16px 0',
            '2xl': '0 0 24px 0',
        },
    },

    heading: {
        fontSize: { base: '24px', xl: '30px', '2xl': '36px' },
        fontWeight: '500',
        lineHeight: { base: '32px', xl: '36px', '2xl': '40px' },
    },

    link: {
        width: 'max-content',
        position: { base: 'absolute', lg: 'inherit' },
        bottom: { base: '17px', lg: 'inherit' },
        left: { base: '0', lg: 'inherit' },
        right: { base: '0', lg: 'inherit' },
        margin: { base: '0 auto', lg: '0' },
    },

    linkText: {
        alignItems: 'center',
        gap: '8px',
        fontSize: { base: '16px', '2xl': '18px' },
        fontWeight: 600,
        lineHeight: '28px',
        padding: { base: '0', md: '0 24px 0 0' },
    },
};
