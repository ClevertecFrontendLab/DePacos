export const styles = {
    wrapper: {
        height: { base: '32px', '2lg': '48px' },
        gap: { base: '12px' },
        margin: { base: '0 0 16px 0' },
        justifyContent: 'center',
        alignItems: 'center',
    },

    filterButton: {
        padding: 0,
        height: '100%',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'black.600',
        width: { base: '32x', '2lg': '48px' },
    },

    inputGroup: {
        maxWidth: { base: '404px', '2lg': '458px' },
        height: { base: '32px', '2lg': '48px' },
    },

    inputRightElement: {
        width: '48px',
        height: '100%',
    },

    input: {
        height: { base: '32px', '2lg': '48px' },
        borderColor: 'black.600',
        _placeholder: {
            color: 'lime.800',
            fontSize: { base: '14px', '2lg': '18px' },
        },
    },

    filterWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '0 auto 32px auto',
        maxWidth: '518px',
    },

    filterLabel: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
    },

    selectWrapper: {
        maxWidth: '234px',
    },

    select: {
        maxW: '300px',
        color: 'black.700',
        fontSize: '16px',
    },
};
