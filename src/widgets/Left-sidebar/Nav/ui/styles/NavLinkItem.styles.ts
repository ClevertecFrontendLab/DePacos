export const getStyles = (isActive: boolean) => ({
    link: {
        fontSize: '16px',
        fontWeight: isActive ? '700' : '500',
        position: 'relative',
        paddingY: '6px',
        paddingLeft: '44px',
        paddingRight: '6px',
        textDecoration: 'none',
        display: 'block',
        borderRadius: 'md',
        width: '100%',
        _before: {
            content: '""',
            position: 'absolute',
            left: '34px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: isActive ? '8px' : '1px',
            marginLeft: isActive ? '-8px' : '0',
            height: '24px',
            backgroundColor: 'lime.300',
            transition: 'width 0.2s',
        },
        _hover: {
            backgroundColor: 'lime.50',
        },
    },
});
