import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { MainPageMobile } from '~/assets/icons/MainPageMobile';
import { Search } from '~/assets/icons/Search';
import { Write } from '~/assets/icons/Write';

import avatar from '../../../../assets/images/avatars/mobileAvatar.png';
import { styles } from './NavMobileFooter.styles';

export const NavMobileFooter = () => (
    <Box data-test-id='footer' sx={styles.wrapper}>
        <Flex as='nav' sx={styles.nav}>
            <Link as={RouterLink} sx={styles.linkMain}>
                <Box as='span' sx={styles.highlightIcon}>
                    <MainPageMobile />
                </Box>
                Главная
            </Link>

            <Link as={RouterLink} sx={styles.linkSearch}>
                <Search width={24} height={24} />
                Поиск
            </Link>

            <Link as={RouterLink} sx={styles.linkWrite}>
                <Write />
                Записать
            </Link>

            <Link as={RouterLink} sx={styles.linkProfile}>
                <img src={avatar} alt='avatar' />
                Мой профиль
            </Link>
        </Flex>
    </Box>
);
