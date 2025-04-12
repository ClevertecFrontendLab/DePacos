export const getStyles = (variant: 'slider' | 'card' | 'description') => ({
    container: {
        display: 'flex',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'black.200',
        position: 'relative',
        height: { base: '100%', '2lg': 'auto' },
        _hover: { boxShadow: '0 0 4px 2px rgba(0,0,0,0.1)' },
        transition: 'box-shadow 0.3s',
        ...(variant === 'slider' && { flexDirection: 'column' }),
        ...(variant === 'card' && { height: { base: '128px', lg: 'auto' } }),
        ...(variant === 'description' && {
            width: '100%',
            maxWidth: { base: '100%', md: '322px' },
        }),
    },

    image: {
        width: '346px',
        objectFit: 'cover',
        ...(variant === 'slider' && {
            height: { base: '128px', xl: '230px' },
        }),
        ...(variant === 'card' && {
            height: '100%',
            width: { base: '158px', xl: '346px' },
        }),
    },

    recommended: {
        position: 'absolute',
        bottom: '5',
        left: '5',
        bg: 'lime.150',
        px: '2',
        py: '1',
        borderRadius: 'md',
    },

    content: {
        flex: '1',
        display: 'flex',
        ...((variant === 'slider' || variant === 'description') && {
            flexDirection: 'column-reverse',
            justifyContent: 'start',
            padding: { base: '8px', lg: '8px', xl: '12px', '2xl': '16px 24px 20px 24px' },
        }),
        ...(variant === 'card' && {
            maxWidth: '100%',
            flexDirection: 'column',
            padding: { base: '8px', lg: '8px', xl: '16px 24px 20px 24px' },
        }),
        ...(variant === 'description' && {
            width: '100%',
            maxWidth: { base: '100%', xl: '282px', '2xl': '100%' },
            padding: { base: '12px', lg: '12px', xl: '16px' },
        }),
    },

    header: {
        gap: { base: '21px', '2xl': '40px' },
        ...(variant === 'slider' && {
            maxWidth: { base: 'none', lg: '145px' },
        }),
        ...(variant === 'card' && {
            marginBottom: { base: '0', lg: '24px' },
            justifyContent: { base: 'space-between', xl: 'start' },
        }),
        ...(variant === 'description' && {
            justifyContent: 'space-between',
            gap: 0,
        }),
    },

    iconBox: {
        textAlign: 'center',
        padding: '0 4px',
        borderRadius: '4px',
        alignItems: 'center',
        top: '8px',
        left: '8px',
        backgroundColor: 'lime.50',
        ...(variant === 'slider' && {
            backgroundColor: 'lime.150',
            position: { base: 'absolute', '2lg': 'static' },
        }),
        ...(variant === 'card' && {
            backgroundColor: 'lime.50',
            position: { base: 'absolute', lg: 'static' },
        }),
    },

    categoryText: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        paddingLeft: '4px',
        ...(variant === 'slider' && {
            padding: { base: '0 0 0 2px', lg: '0 0 0 8px' },
        }),
    },

    statText: {
        pl: '6px',
        fontSize: '12px',
        fontWeight: '600',
        color: 'lime.600',
    },

    titleText: {
        fontSize: { base: '16px', xl: '20px', lg: '18px' },
        fontWeight: 500,
        noOfLines: { base: '2', lg: '1' },
        ...(variant === 'description' && { noOfLines: '1' }),
        lineHeight: { base: 1.5, xl: 'inherit' },
        margin: { base: '0 0 8px 0', md: '0 0 8px 0' },
    },

    descriptionText: {
        fontSize: '14px',
        lineHeight: '20px',
        noOfLines: '3',
        ...(variant !== 'card' && { marginBottom: '24px' }),
    },

    saveButton: {
        height: '32px',
        padding: '0 10px',
        border: '1px solid',
        borderColor: 'black.600',
        backgroundColor: 'white.900',
    },

    cookButton: {
        height: { base: '24px', lg: '32px' },
        color: 'white.900',
        backgroundColor: 'black.900',
        fontSize: { base: '12px', lg: '14px' },
        padding: { base: '0 8px', lg: '0 12px' },
    },

    saveIconBox: {
        padding: '5px 5px',
        border: '1px solid',
        borderRadius: '6px',
        margin: '0 5px 0 0',
    },

    descriptionContainer: {
        height: { base: '100%', lg: 'auto' },
        flexGrow: { base: 0, xl: 1 },
    },
});
