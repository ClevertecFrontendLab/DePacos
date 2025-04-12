export const styles = {
    wrapper: {
        position: 'relative',
        maxWidth: '1920px',
        margin: '0 auto',
        // templateAreas: {
        //   base: `'header' 'main' 'footer'`,
        //   '2lg': `'header header header' 'nav main info'`,
        // },
        //
        // gridTemplateRows: {
        //   base: '80px 1fr 84px',
        //   lg: '80px 1fr',
        // },
        //
        // gridTemplateColumns: {
        //   base: '1fr',
        //   '2lg': '256px 1fr 280px',
        // },
    },

    header: {
        height: { base: '64px', lg: '80px' },
        position: 'fixed',
        width: '100%',
        maxWidth: '1920px',
        zIndex: 10,
    },

    main: {
        padding: {
            base: '16px',
            '2lg': '32px 0 0 24px',
        },

        width: '100%',
        maxW: {
            base: '360px',
            sm: '100%',
            // md: '880px',
            lg: '880px',
            // xl: '880px',
            '2xl': '1380px',
        },

        margin: {
            base: '0 auto',
            '2lg': '0',
        },
    },
};
