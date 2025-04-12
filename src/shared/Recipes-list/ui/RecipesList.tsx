import { SimpleGrid } from '@chakra-ui/icons';
import { Box, Flex, Link, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { ArrowForward } from '~/assets/icons/ArrowForward';
import { MockRecipes } from '~/data/mockRecipes';
import { Recipe } from '~/shared/Recipe/ui/Recipe';

import { getStyles } from './RecipesList.styles';

export const RecipesList = ({
    recipeData,
    nameLink,
    link,
    linkPosition,
}: {
    recipeData: MockRecipes[];
    nameLink: string;
    linkPosition: 'top' | 'bottom';
    link: string;
}) => {
    const styles = getStyles(linkPosition);

    // const dataTestId = useBreakpointValue({
    //   base: 'juiciest-link-mobile',
    //   lg: 'juiciest-link',
    // });

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box sx={styles.wrapper}>
            <>
                <Link
                    display={isMobile ? 'none' : 'inherit'}
                    data-test-id='juiciest-link'
                    as={RouterLink}
                    to={link}
                    variant='plain'
                    sx={styles.link}
                >
                    <Flex as='span' sx={styles.linkText}>
                        {nameLink}
                        {linkPosition === 'top' && <ArrowForward width={16} color='#000' />}
                    </Flex>
                </Link>
                <Link
                    display={!isMobile ? 'none' : 'inherit'}
                    data-test-id='juiciest-link-mobile'
                    as={RouterLink}
                    to={link}
                    variant='plain'
                    sx={styles.link}
                >
                    <Flex as='span' sx={styles.linkText}>
                        {nameLink}
                        {linkPosition === 'top' && <ArrowForward width={16} color='#000' />}
                    </Flex>
                </Link>
            </>
            <SimpleGrid
                columns={styles.grid.columns}
                sx={{ gap: styles.grid.gap, margin: styles.grid.margin }}
            >
                {recipeData.map((product, i) => (
                    <Recipe key={i} {...product} variant='card' />
                ))}
            </SimpleGrid>
        </Box>
    );
};
