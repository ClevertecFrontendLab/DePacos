import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { ArrowBack } from '~/assets/icons/ArrowBack';
import { ArrowForward } from '~/assets/icons/ArrowForward';
import { mockRecipeSlider } from '~/data/mockRecipes';
import { Recipe } from '~/shared/Recipe/ui/Recipe';

const styles = {
    wrapper: {
        position: 'relative',
    },
    navButton: {
        position: 'absolute',
        top: '145px',
        zIndex: 5,
        variant: 'solid',
        bg: '#000',
        width: '48px',
        height: '48px',
        borderRadius: '6px',
    },
    sliderTrack: {
        gap: { base: '12px', '2xl': '24px' },
        // justifyContent: {
        //     base: 'flex-start',
        //     sm: 'space-between',
        // },
        width: { base: '143%', md: '130%', xl: '130%', '2xl': '100%' },
    },
    slideBox: {
        maxWidth: {
            base: '158px',
            xl: '100%',
            // "2xl": "322px",
        },
        flexBasis: { base: '50%', md: '32%' },
    },
};

export const Slider = () => {
    const visibleSlides =
        useBreakpointValue({
            base: 3,
            '2sm': 3,
            md: 5,
            lg: 4,
            xl: 4,
            '2xl': 4,
        }) ?? 1;

    const isTablet =
        useBreakpointValue({
            base: false,
            '2lg': true,
        }) ?? false;

    return (
        <Box sx={styles.wrapper}>
            {isTablet && (
                <>
                    <IconButton
                        aria-label='Назад'
                        icon={<ArrowBack />}
                        left='-5px'
                        sx={styles.navButton}
                    />

                    <IconButton
                        aria-label='Вперёд'
                        icon={<ArrowForward />}
                        right='-5px'
                        sx={styles.navButton}
                    />
                </>
            )}
            <Box sx={{ overflow: 'hidden' }}>
                <Flex sx={styles.sliderTrack}>
                    {mockRecipeSlider.slice(0, visibleSlides).map((product, index) => (
                        <Box key={index} sx={styles.slideBox}>
                            <Recipe {...product} variant='slider' />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
