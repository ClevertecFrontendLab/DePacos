export const styles = {
    tab: {
        fontSize: { base: '14px', md: '16px' },
        fontWeight: '500',
        lineHeight: { base: '20px', md: '24px' },
        whiteSpace: 'nowrap',
        color: 'lime.800',
        _selected: {
            color: 'lime.600',
            borderColor: 'lime.600',
        },
    },

    tabPanel: {
        padding: '0',
    },

    tabList: {
        // justifyContent: 'center',
        gap: '13px',
        width: '1006px',
        marginBottom: '24px',
        flexWrap: 'nowrap',
    },

    tabsWrap: {
        overflowX: 'auto',
    },

    container: {
        maxWidth: { base: '328px', md: '736px', lg: '990px', xl: '100%' },
        margin: '0 auto',
    },
};
