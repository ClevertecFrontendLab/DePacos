export const getStyles = (isMobile?: boolean) => ({
    wrapper: {
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        margin: isMobile ? '0' : '24px 72px 0 0',
        gap: isMobile ? '15px' : '40px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '600',
        color: 'lime.600',
        fontSize: isMobile ? '12px' : '16px',
        lineHeight: isMobile ? '16px' : '24px',
        gap: isMobile ? '6px' : '8px',
    },
    iconSize: isMobile ? 10 : 16,
});
