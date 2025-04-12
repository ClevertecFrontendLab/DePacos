// shared/ui/search/ui/Search.tsx

import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

import { ListFilter } from '~/assets/icons/ListFilter';
import { Search as SearchIcon } from '~/assets/icons/Search';

import { styles } from './Search.styles';

export const Search = () => {
    const isTablet = useBreakpointValue({ base: false, '2lg': true }) ?? false;

    return (
        <>
            <Flex sx={styles.wrapper}>
                <Button sx={styles.filterButton}>
                    <ListFilter />
                </Button>

                <InputGroup sx={styles.inputGroup}>
                    <InputRightElement sx={styles.inputRightElement}>
                        <SearchIcon />
                    </InputRightElement>
                    <Input
                        type='search'
                        placeholder='Название или ингредиент...'
                        sx={styles.input}
                    />
                </InputGroup>
            </Flex>

            {isTablet && (
                <Flex sx={styles.filterWrapper}>
                    <Text sx={styles.filterLabel}>Исключить мои аллергены</Text>
                    <Switch size='lg' />
                    <Box sx={styles.selectWrapper}>
                        <Select placeholder='Выберите из списка...' sx={styles.select} />
                    </Box>
                </Flex>
            )}
        </>
    );
};
