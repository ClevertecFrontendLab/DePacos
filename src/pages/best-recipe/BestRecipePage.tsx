import { Box } from '@chakra-ui/react';

import { mockDescriptions } from '~/data/mockDescriptions';
import { mockFooter } from '~/data/mockFooter';
import { mockRecipe } from '~/data/mockRecipes';
import { CookNowBlock } from '~/shared/Cook-now-block/ui/CookNowBlock';
import { RecipesList } from '~/shared/Recipes-list/ui/RecipesList';
import { Search } from '~/shared/Search/ui/Search';
import { Section } from '~/shared/Section/ui/Section';

export const BestRecipePage = () => (
    <>
        <Section title='Самое сочное' textAlign='center' margin='0 0 32px 0'>
            <Search />
        </Section>
        <Box as='section' sx={{ margin: { base: '0 0 96px 0', md: '0 0 120px 0' } }}>
            <RecipesList
                recipeData={mockRecipe.best}
                nameLink='Загрузить еще'
                linkPosition='bottom'
                link=''
            />
        </Box>
        <Section
            margin='0'
            title='Веганская кухня'
            heading='h2'
            display='flex'
            description={mockDescriptions.titleVeganDescription}
        >
            <CookNowBlock recipeData={mockFooter.main} cookData={mockFooter.mainBtn} />
        </Section>
    </>
);
