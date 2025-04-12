import { Accordion, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { ClinicalNutrition } from '~/assets/icons/ClinicalNutrition';
import { Desserts } from '~/assets/icons/Desserts';
import { Drinks } from '~/assets/icons/Drinks';
import { FirstCourses } from '~/assets/icons/FirstCourses';
import { Grill } from '~/assets/icons/Grill';
import { National } from '~/assets/icons/National';
import { Preparations } from '~/assets/icons/Preparations';
import { Salads } from '~/assets/icons/Salads';
import { Sauces } from '~/assets/icons/Sauces';
import { SecondCourses } from '~/assets/icons/SecondCourses';
import { Snaks } from '~/assets/icons/Snaks';
import { Vegan } from '~/assets/icons/Vegan';
import { ChildrenFood } from '~/assets/icons/СhildrenFood';
import { NavItem } from '~/widgets/Left-sidebar/Nav/ui/NavItem';
import { NavLinkItem } from '~/widgets/Left-sidebar/Nav/ui/NavLinkItem';

import { styles } from './styles/Nav.styles';

export const Nav = () => {
    const navigate = useNavigate();
    const handleNavItem = () => {
        navigate('/vegan/second-courses');
    };

    return (
        <Box as='nav' aria-label='Меню' sx={styles.navWrap}>
            <Accordion allowMultiple>
                <NavItem onClick={handleNavItem} icon={<Salads />} label='Салаты'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Snaks />} label='Закуски'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<FirstCourses />} label='Первые блюда'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<SecondCourses />} label='Вторые блюда'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Desserts />} label='Десерты, выпечка'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Grill />} label='Блюда на гриле'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem
                    onClick={handleNavItem}
                    data-test-id='vegan-cuisine'
                    icon={<Vegan />}
                    label='Веганская кухня'
                >
                    <NavLinkItem href='#'>Закуски</NavLinkItem>
                    <NavLinkItem href='#'>Первые блюда</NavLinkItem>
                    <NavLinkItem href='/vegan/second-courses'>Вторые блюда</NavLinkItem>
                    <NavLinkItem href='#'>Гарниры</NavLinkItem>
                    <NavLinkItem href='#'>Десерты</NavLinkItem>
                    <NavLinkItem href='#'>Выпечка</NavLinkItem>
                    <NavLinkItem href='#'>Сыроедческие блюда</NavLinkItem>
                    <NavLinkItem href='#'>Напитки</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<ChildrenFood />} label='Детские блюда'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem
                    onClick={handleNavItem}
                    icon={<ClinicalNutrition />}
                    label='Лечебное питание'
                >
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<National />} label='Национальные'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Sauces />} label='Соусы'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Drinks />} label='Напитки'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
                <NavItem onClick={handleNavItem} icon={<Preparations />} label='Заготовки'>
                    <NavLinkItem href='#'>subMenu</NavLinkItem>
                </NavItem>
            </Accordion>
        </Box>
    );
};
