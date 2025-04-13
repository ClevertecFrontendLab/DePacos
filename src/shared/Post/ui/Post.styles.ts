export const styles = {
    wrapper: {
        padding: { base: '16px', '2xl': '24px 24px 20px 24px' },
        borderRadius: '8px',
        backgroundColor: 'white.900',
        maxWidth: '427px',
        width: {
            base: '100%',
            // sm: 'calc(50% - 8px)',
            md: 'calc(33.333% - 10.6px)',
        },
    },

    avatarBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },

    title: {
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '500',
        noOfLines: 1,
        wordBreak: 'break-all',
    },

    subtitle: {
        fontSize: '14px',
        color: 'black.700',
    },

    description: {
        noOfLines: 3,
        maxWidth: { base: '262px', md: '355px' },
    },
};
