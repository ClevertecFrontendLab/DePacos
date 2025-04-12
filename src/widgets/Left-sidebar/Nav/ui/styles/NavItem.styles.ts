export const getStyles = (isExpanded: boolean) => ({
    button: {
        padding: '12px 8px',
        backgroundColor: isExpanded ? 'lime.100' : 'transparent',
        cursor: 'pointer',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        _hover: {
            backgroundColor: 'lime.50',
        },
    },

    label: {
        margin: 0,
        paddingLeft: '10px',
        flex: 1,
        fontSize: '16px',
        fontWeight: isExpanded ? '700' : '500',
        lineHeight: '24px',
        textAlign: 'left',
    },

    panel: {
        padding: 0,
    },

    stack: {
        alignItems: 'flex-start',
        spacing: 2,
    },
});
