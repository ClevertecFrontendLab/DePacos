import { Box } from '@chakra-ui/react';

import { mockDescriptions } from '~/data/mockDescriptions';
import { mockFooter } from '~/data/mockFooter';
import { CookNowBlock } from '~/shared/Cook-now-block/ui/CookNowBlock';
import { Search } from '~/shared/Search/ui/Search';
import { Section } from '~/shared/Section/ui/Section';
import { TabsRecipe } from '~/shared/Tabs-recipe/ui/TabsRecipe';

export const VeganCuisunePage = () => (
    <>
        <Section
            description={mockDescriptions.titleVeganDescription}
            title='Веганская кухня'
            textAlign='center'
            margin='0 0 32px 0'
        >
            <Search />
        </Section>
        <Box as='section' sx={{ margin: { base: '0 0 96px 0', md: '0 0 120px 0' } }}>
            <TabsRecipe />
        </Box>
        <Section
            title='Десерты, выпечка'
            heading='h2'
            display='flex'
            margin='0'
            description={mockDescriptions.dessertDescription}
        >
            <CookNowBlock recipeData={mockFooter.vegan} cookData={mockFooter.veganBtn} />
        </Section>
    </>
);
