import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { mockRecipe } from '~/data/mockRecipes';
import { RecipesList } from '~/shared/Recipes-list/ui/RecipesList';
import { styles } from '~/shared/Tabs-recipe/ui/TabsRecipe.styles';

const tabItems = [
    { label: 'Закуски', content: <p>Закуски</p> },
    { label: 'Первые блюда', content: <p>Первые блюда</p> },
    {
        label: 'Вторые блюда',
        content: (
            <RecipesList
                link=''
                recipeData={mockRecipe.vegan}
                nameLink='Загрузить еще'
                linkPosition='bottom'
            />
        ),
    },
    { label: 'Гарниры', content: <p>Гарниры</p> },
    { label: 'Десерты', content: <p>Десерты</p> },
    { label: 'Выпечка', content: <p>Выпечка</p> },
    { label: 'Сыроедческие блюда', content: <p>Сыроедческие блюда</p> },
    { label: 'Напитки', content: <p>Напитки</p> },
];

export const TabsRecipe = () => (
    <Tabs sx={styles.container} defaultIndex={2}>
        <Box className='test' sx={styles.tabsWrap}>
            <TabList sx={styles.tabList}>
                {tabItems.map((item, i) => (
                    <Tab key={i} sx={styles.tab}>
                        {item.label}
                    </Tab>
                ))}
            </TabList>
        </Box>

        <TabPanels>
            {tabItems.map((item, i) => (
                // <TabPanel key={i} sx={styles.tabPanel}>
                <TabPanel key={i} sx={styles.tabPanel}>
                    {item.content}
                </TabPanel>
            ))}
        </TabPanels>
    </Tabs>
);
