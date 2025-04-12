import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { styles } from '~/shared/Post/ui/Post.styles';

type Props = {
    title: string;
    subtitle: string;
    avatar: string;
    description: string;
};

export const Post = ({ title, subtitle, description, avatar }: Props) => (
    <Box sx={styles.wrapper}>
        <Flex sx={styles.avatarBox}>
            <Avatar name={title} src={avatar} mr='3' />
            <Box>
                <Text sx={styles.title}>{title}</Text>
                <Text sx={styles.subtitle}>{subtitle}</Text>
            </Box>
        </Flex>
        <Text sx={styles.description}>{description}</Text>
    </Box>
);
