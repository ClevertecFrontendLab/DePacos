import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

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

export const TabsRecipe = () => {
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const isMobile = useBreakpointValue({ base: true, md: false, lg: true }) ?? false;

    const correctedIndex = isMobile ? 1 : 2;

    const [activeIndex, setActiveIndex] = useState(correctedIndex);
    const filteredTabs = isMobile ? tabItems.slice(1) : tabItems;

    useEffect(() => {
        setActiveIndex(correctedIndex);
    }, [isMobile]);

    useEffect(() => {
        const activeTab = tabRefs.current[activeIndex];
        if (activeTab) {
            activeTab.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [activeIndex]);

    return (
        <Tabs index={activeIndex} onChange={(index) => setActiveIndex(index)} sx={styles.container}>
            <Box sx={styles.tabsWrap}>
                <TabList sx={styles.tabList}>
                    {filteredTabs.map((item, i) => (
                        <Tab
                            key={i}
                            ref={(el) => {
                                tabRefs.current[i] = el;
                            }}
                            sx={styles.tab}
                        >
                            {item.label}
                        </Tab>
                    ))}
                </TabList>
            </Box>

            <TabPanels>
                {filteredTabs.map((item, i) => (
                    <TabPanel key={i} sx={styles.tabPanel}>
                        {item.content}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};
