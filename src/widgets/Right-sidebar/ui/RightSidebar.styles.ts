export const styles = {
    wrapper: {
        position: 'fixed',
        width: '100%',
        maxWidth: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100vh - 80px)',
        alignItems: 'end',
    },

    actionWrapper: {
        width: 'max-content',
        position: 'relative',
        display: 'flex',
        marginBottom: '80px',
        marginRight: '80px',
        borderRadius: '50%',
        boxShadow:
            '0 0 10px #C4FF61, 0 0 20px #C4FF61, 0 0 40px #C4FF61, 0 0 50px #C4FF61, 0 0 50px #C4FF61',
    },

    tooltip: {
        backgroundColor: 'transparent',
        position: 'absolute',
        whiteSpace: 'nowrap',
        fontSize: '12px',
        lineHeight: '16px',
        opacity: '0.65',
        right: '50%',
        transform: 'translateX(50%)',
        bottom: '-30px',
    },
};
