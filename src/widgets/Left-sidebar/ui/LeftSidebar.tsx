import { Box, Button, Text } from '@chakra-ui/react';

import { Logout } from '~/assets/icons/LogOut';
import { Nav } from '~/widgets/Left-sidebar/Nav/ui/Nav';

import { styles } from './LeftSidebar.styles';

export const LeftSidebar = () => (
    <Box sx={styles.wrapper}>
        <Nav />
        <Box sx={styles.infoBlock}>
            <Text sx={styles.versionText}>Версия программы 03.25</Text>
            <Text sx={styles.copyrightText}>
                Все права защищены,
                <br />
                ученический файл,
                <br />
                ©Клевер Технолоджи, 2025
            </Text>
            <Button variant='link' leftIcon={<Logout />} sx={{ ...styles.logoutButton }}>
                Выйти
            </Button>
        </Box>
    </Box>
);
