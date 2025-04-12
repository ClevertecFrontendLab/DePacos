import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { ArrowForward } from '~/assets/icons/ArrowForward';
import { PostsList } from '~/shared/Posts-list/ui/PostsList';

import { styles } from './PostSection.styles';

export const PostSection = () => (
    <Box as='section' sx={styles.wrapper}>
        <Flex sx={styles.header}>
            <Heading as='h2' sx={styles.heading}>
                Кулинарные блоги
            </Heading>
            <Link as={RouterLink} to='/' sx={styles.link}>
                <Flex as='span' sx={styles.linkText}>
                    Все авторы <ArrowForward width={16} color='#000' />
                </Flex>
            </Link>
        </Flex>
        <PostsList />
    </Box>
);
