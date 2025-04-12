import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { Burger } from '~/assets/icons/Burger';
import { Statistic } from '~/shared/Statistic/ui/Statistic';

import avatar from '../../../assets/images/avatars/avatar.png';
import logo from '../../../assets/images/logo.png';
import logoPan from '../../../assets/images/logoPan.svg';
import { getStyles } from './Header.styles';

export const Header = () => {
    const isTablet = useBreakpointValue({ base: false, '2lg': true }) ?? false;
    const showIcon = useBreakpointValue({ base: false, md: true }) ?? false;
    const styles = getStyles(isTablet);

    const breadcrumbLabels: Record<string, string> = {
        vegan: 'Веганская кухня',
        'second-courses': 'Вторые блюда',
        'best-recipe': 'Самое сочное',
    };

    const location = useLocation();

    return (
        <Box sx={styles.wrapper}>
            <Box sx={styles.logoBox}>
                <Link to='/'>
                    {showIcon ? <img alt='logo' src={logo} /> : <img alt='logo' src={logoPan} />}
                </Link>
            </Box>

            {isTablet && (
                <Breadcrumb
                    sx={styles.breadcrumb}
                    separator={
                        <Box sx={styles.breadcrumbSeparator}>
                            <ChevronRightIcon sx={styles.breadcrumbIcon} />
                        </Box>
                    }
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/' sx={styles.breadcrumbLink}>
                            Главная
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {location.pathname
                        .split('/')
                        .filter(Boolean)
                        .map((segment, index, arr) => {
                            const to = '/' + arr.slice(0, index + 1).join('/');
                            const isLast = index === arr.length - 1;

                            return (
                                <BreadcrumbItem key={to} isCurrentPage={isLast}>
                                    <BreadcrumbLink
                                        as={Link}
                                        to={to}
                                        sx={{
                                            fontWeight: isLast ? '700' : '500',
                                            ...styles.breadcrumbLink,
                                        }}
                                    >
                                        {breadcrumbLabels[segment] || decodeURIComponent(segment)}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            );
                        })}
                </Breadcrumb>
            )}

            {isTablet ? (
                <Flex sx={styles.userWrap}>
                    <Avatar sx={styles.avatar} src={avatar} />
                    <Box sx={styles.userBox}>
                        <Text as='span' sx={styles.userName}>
                            Екатерина Константинопольская
                        </Text>
                        <Text as='span' sx={styles.userEmail}>
                            @bake_and_pie
                        </Text>
                    </Box>
                </Flex>
            ) : (
                <Flex sx={styles.statisticWrap}>
                    <Statistic isMobile />
                    <Burger />
                </Flex>
            )}
        </Box>
    );
};
