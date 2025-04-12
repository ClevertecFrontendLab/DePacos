export const styles = {
    wrapper: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: 'lime.50',
        height: '84px',
        padding: {
            base: '0 15px 0 25px',
            md: '0 50px',
        },
    },

    nav: {
        justifyContent: 'space-between',
        alignItems: 'end',
        height: '74px',
    },

    linkBase: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '16px',
    },

    linkMain: {
        gap: '3px',
        color: 'black.900',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '16px',
    },

    linkSearch: {
        gap: '12px',
        color: 'black.700',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '16px',
    },

    linkWrite: {
        color: 'black.700',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '16px',
    },

    linkProfile: {
        gap: '3px',
        color: 'black.700',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        lineHeight: '16px',
    },

    highlightIcon: {
        boxShadow:
            '0 0 10px #C4FF61, 0 0 20px #C4FF61, 0 0 40px #C4FF61, 0 0 50px #C4FF61, 0 0 50px #C4FF61',
        borderRadius: '50%',
    },
};
