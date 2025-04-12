export const getStyles = (isTablet: boolean) => ({
    wrapper: {
        backgroundColor: 'lime.50',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: {
            base: '0 20px',
            lg: '0 80px 0 18px',
        },
        justifyContent: isTablet ? 'start' : 'space-between',
    },

    logoBox: {
        maxWidth: '135px',
        marginRight: isTablet ? '128px' : '0',
    },

    breadcrumb: {
        flex: '1',
    },

    breadcrumbLink: {
        fontSize: '16px',
        lineHeight: '24px',
        opacity: 0.65,
    },

    breadcrumbSeparator: {
        margin: '0 -5px',
    },

    breadcrumbIcon: {
        fontSize: '18px',
    },

    avatar: {
        width: '48px',
        height: '48px',
    },

    userWrap: {
        alignItems: 'flex',
        gap: '3',
    },

    userBox: {
        display: 'flex',
        flexDirection: 'column',
    },

    userName: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '28px',
    },

    userEmail: {
        opacity: 0.65,
    },

    statisticWrap: {
        gap: '28px',
    },
});
