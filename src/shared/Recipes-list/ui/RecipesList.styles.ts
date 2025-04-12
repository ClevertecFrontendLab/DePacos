export const getStyles = (linkPosition: 'top' | 'bottom') => ({
    wrapper: {
        position: 'relative',
    },

    link: {
        position: 'absolute',
        backgroundColor: 'lime.400',
        borderRadius: '6px',
        width: 'max-content',
        ...(linkPosition === 'top'
            ? {
                  top: { base: 'inherit', xl: '-56px', '2xl': '-72px' },
                  right: { base: '0' },
                  left: { base: '0', xl: 'inherit' },
                  bottom: { base: '-52px', xl: 'inherit' },
                  margin: { base: '0 auto', xl: '0' },
                  padding: { base: '8px 16px', '2xl': '10px 24px' },
              }
            : {
                  bottom: '-56px',
                  left: '0',
                  right: '0',
                  margin: '0 auto',
                  padding: '8px 16px',
              }),
    },

    linkText: {
        alignItems: 'center',
        gap: '8px',
        fontWeight: 600,
        ...(linkPosition === 'top'
            ? {
                  fontSize: { base: '16px', '2xl': '18px' },
                  lineHeight: { base: '24px', '2xl': '28px' },
              }
            : {
                  fontSize: '16px',
                  lineHeight: '24px',
              }),
    },

    grid: {
        columns: { base: 1, sm: 1, md: 2, xl: 1, '2xl': 2 },
        gap: { base: '16px', xl: '24px' },
        margin: { base: '0 0 84px 0', xl: '0' },
    },
});
