import { Button, Flex, Text } from '@chakra-ui/react';

import { MockFooterBtn } from '~/data/mockFooter';
import { MockRecipes } from '~/data/mockRecipes';
import { styles } from '~/shared/Cook-now-block/ui/CookNow.styles';
import { Recipe } from '~/shared/Recipe/ui/Recipe';

export const CookNowBlock = ({
    recipeData,
    cookData,
}: {
    recipeData: MockRecipes[];
    cookData: MockFooterBtn[];
}) => (
    <Flex sx={styles.container}>
        <Flex sx={styles.recipeGroup}>
            {recipeData.map((item, i) => (
                <Recipe
                    key={i}
                    variant='description'
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    likes={item.likes}
                    bookmarks={item.bookmarks}
                    icon={item.icon}
                />
            ))}
        </Flex>

        <Flex sx={styles.cookList}>
            {cookData.map((item, i) => (
                <Flex key={i} sx={styles.cookCard}>
                    {item.icon}
                    <Text sx={styles.cookTitle}>{item.title}</Text>
                    <Button variant='plain' sx={styles.cookButton}>
                        Готовить
                    </Button>
                </Flex>
            ))}
        </Flex>
    </Flex>
);
