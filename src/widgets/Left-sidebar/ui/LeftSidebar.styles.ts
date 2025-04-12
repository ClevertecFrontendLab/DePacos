export const styles = {
    wrapper: {
        position: 'fixed',
        width: '100%',
        maxWidth: '256px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: '24px',
        h: 'calc(100vh - 80px)',
        borderRight: '1px solid #ccc',
    },

    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        px: '24px',
        pb: '32px',
    },

    versionText: {
        as: 'span',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '500',
        opacity: 0.25,
    },

    copyrightText: {
        as: 'small',
        lineHeight: '16px',
        opacity: 0.65,
    },

    logoutButton: {
        color: '#000',
        variant: 'link',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '600',
        leftIcon: undefined,
        width: 'max-content',
        _hover: {
            textDecoration: 'none',
        },
    },
};
