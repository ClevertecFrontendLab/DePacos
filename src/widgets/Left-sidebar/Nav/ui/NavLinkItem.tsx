import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';

import { getStyles } from './styles/NavLinkItem.styles';

type Props = {
    href: string;
    children: ReactNode;
};

export const NavLinkItem = ({ href, children }: Props) => {
    const location = useLocation();
    const isActive = location.pathname === href || location.pathname.startsWith(href + '/');
    const styles = getStyles(isActive);

    return (
        <Box as={RouterLink} to={href} sx={styles.link}>
            {children}
        </Box>
    );
};
