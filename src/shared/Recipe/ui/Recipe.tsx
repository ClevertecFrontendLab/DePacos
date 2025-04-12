import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Bookmarks } from '~/assets/icons/Bookmarks';
import { Likes } from '~/assets/icons/Likes';

import { getStyles } from './Recipe.styles';

type Props = {
    variant: 'slider' | 'card' | 'description';
    title: string;
    description: string;
    category: string;
    image?: string | undefined;
    likes: number | null;
    bookmarks: number | null;
    icon: ReactNode;
    recommendedBy?: {
        name: string;
        avatar: string;
    };
};

export const Recipe = ({
    title,
    description,
    category,
    image,
    bookmarks,
    likes,
    icon,
    recommendedBy,
    variant,
}: Props) => {
    const isTablet = useBreakpointValue({ base: false, '2lg': true }) ?? false;
    const styles = getStyles(variant);

    return (
        <Box sx={styles.container}>
            <Box position='relative'>
                {variant !== 'description' && <Image src={image} alt={title} sx={styles.image} />}

                {recommendedBy && variant === 'card' && isTablet && (
                    <HStack sx={styles.recommended}>
                        <Avatar src={recommendedBy.avatar} sx={{ width: '16px', height: '16px' }} />
                        <Text>{recommendedBy.name} рекомендует</Text>
                    </HStack>
                )}
            </Box>

            <Box sx={styles.content}>
                <HStack sx={styles.header}>
                    <Flex sx={styles.iconBox}>
                        {icon}
                        <Text sx={styles.categoryText}>{category}</Text>
                    </Flex>

                    {(likes || bookmarks) && (
                        <HStack gap={4}>
                            {bookmarks && (
                                <HStack align='end' spacing='1'>
                                    <Bookmarks width={12} />
                                    <Text sx={styles.statText}>{bookmarks}</Text>
                                </HStack>
                            )}
                            {likes && (
                                <HStack align='end' spacing='1'>
                                    <Likes width={12} />
                                    <Text sx={styles.statText}>{likes}</Text>
                                </HStack>
                            )}
                        </HStack>
                    )}
                </HStack>

                <Box sx={styles.descriptionContainer}>
                    <Text sx={styles.titleText}>{title}</Text>

                    {(variant === 'description' ||
                        (isTablet && (variant === 'slider' || variant === 'card'))) && (
                        <Text sx={styles.descriptionText}>{description}</Text>
                    )}
                </Box>

                {variant === 'card' && (
                    <HStack sx={{ justifyContent: 'end' }}>
                        {isTablet ? (
                            <Button leftIcon={<Bookmarks width={12} />} sx={styles.saveButton}>
                                Сохранить
                            </Button>
                        ) : (
                            <Box sx={styles.saveIconBox}>
                                <Bookmarks height={12} width={12} />
                            </Box>
                        )}

                        <Button sx={styles.cookButton}>Готовить</Button>
                    </HStack>
                )}
            </Box>
        </Box>
    );
};
