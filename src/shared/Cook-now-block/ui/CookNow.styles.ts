export const styles = {
    cookList: {
        width: '100%',
        flexDirection: 'column',
        gap: { base: '12px', sm: '6px', lg: '12px' },
        maxHeight: '192px',
        maxWidth: { base: '100%', md: '240px', xl: '282px', '2xl': '668px' },
    },

    container: {
        gap: { base: '12px', lg: '16px', '2xl': '24px' },
        flexDirection: { base: 'column', md: 'row' },
    },

    recipeGroup: {
        gap: { base: '12px', lg: '16px', '2xl': '24px' },
        flexDirection: { base: 'column', md: 'row' },
    },

    cookCard: {
        alignItems: 'center',
        padding: { base: '12px', '2xl': '0 24px' },
        height: { base: '52px', '2xl': '56px' },
        border: '1px solid',
        borderColor: 'black.200',
        borderRadius: '8px',
        _hover: { boxShadow: '0 0 4px 2px rgba(0,0,0,0.1)' },
        transition: 'box-shadow 0.3s',
    },

    cookTitle: {
        pl: '8px',
        flexGrow: 1,
        width: '50%',
        fontSize: { base: '16px', xl: '18px', '2xl': '20px' },
        fontWeight: '500',
        lineHeight: '28px',
        noOfLines: 1,
    },

    cookButton: {
        variant: 'plain',
        color: 'lime.600',
        border: '1px solid',
        borderRadius: '6px',
        borderColor: 'lime.600',
        width: { base: '70px', '2xl': '87px' },
        height: '32px',
        fontSize: { base: '12px', '2xl': '14px' },
        px: '12px',
    },
};
