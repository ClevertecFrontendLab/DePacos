import { Box, Button, Text } from '@chakra-ui/react';

import { WriteRecipe } from '~/assets/icons/WriteRecipe';
import { Statistic } from '~/shared/Statistic/ui/Statistic';

import { styles } from './RightSidebar.styles';

export const RightSidebar = () => (
    <Box sx={styles.wrapper}>
        <Statistic />
        <Box sx={styles.actionWrapper}>
            <Button p={0}>
                <WriteRecipe />
            </Button>
            <Text as='span' sx={styles.tooltip}>
                Записать рецепт
            </Text>
        </Box>
    </Box>
);
