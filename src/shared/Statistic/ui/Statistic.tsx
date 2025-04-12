import { Box, Text } from '@chakra-ui/react';

import { Bookmarks } from '~/assets/icons/Bookmarks';
import { Likes } from '~/assets/icons/Likes';
import { People } from '~/assets/icons/People';

import { getStyles } from './Statistic.styles';

export const Statistic = ({ isMobile }: { isMobile?: boolean }) => {
    const styles = getStyles(isMobile);

    return (
        <Box sx={styles.wrapper}>
            <Text as='span' sx={styles.item}>
                <Bookmarks width={styles.iconSize} />
                185
            </Text>
            <Text as='span' sx={styles.item}>
                <People width={styles.iconSize} />
                589
            </Text>
            <Text as='span' sx={styles.item}>
                <Likes width={styles.iconSize} />
                587
            </Text>
        </Box>
    );
};
