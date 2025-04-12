import './App.styles';

import { GridItem } from '@chakra-ui/icons';
import { Grid, useBreakpointValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { BestRecipePage } from '~/pages/best-recipe/BestRecipePage';
import { MainPage } from '~/pages/main/ui/MainPage';
import { VeganCuisunePage } from '~/pages/vegan-cuisune/ui/VeganCuisunePage';
import { NavMobileFooter } from '~/widgets/Footer/Nav/ui/NavMobileFooter';
import { Header } from '~/widgets/Header/ui/Header';
import { LeftSidebar } from '~/widgets/Left-sidebar/ui/LeftSidebar';
import { RightSidebar } from '~/widgets/Right-sidebar/ui/RightSidebar';

import { styles } from './App.styles';

const App = () => {
    const isTablet =
        useBreakpointValue({
            base: false,
            '2lg': true,
        }) ?? false;

    return (
        <Grid
            sx={styles.wrapper}
            templateAreas={{
                base: `'header' 'main' 'footer'`,
                '2lg': `'header header header' 'nav main info'`,
            }}
            gridTemplateRows={{ base: '80px 1fr 84px', lg: '80px 1fr' }}
            gridTemplateColumns={{ base: '1fr', '2lg': '256px 1fr 280px' }}
        >
            <GridItem as='header' area='header' sx={styles.header} data-test-id='header'>
                <Header />
            </GridItem>
            {isTablet && (
                <GridItem as='aside' area='nav'>
                    <LeftSidebar />
                </GridItem>
            )}
            <GridItem as='main' area='main' sx={styles.main}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/vegan/second-courses' element={<VeganCuisunePage />} />
                    <Route path='/best-recipe' element={<BestRecipePage />} />
                </Routes>
            </GridItem>
            {isTablet ? (
                <GridItem as='aside' area='info'>
                    <RightSidebar />
                </GridItem>
            ) : (
                <GridItem as='footer'>
                    <NavMobileFooter />
                </GridItem>
            )}
        </Grid>
    );
};
export default App;
