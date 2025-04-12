import { Flex } from '@chakra-ui/react';

import { mockPosts } from '~/data/mockPosts';
import { Post } from '~/shared/Post/ui/Post';
import { styles } from '~/shared/Posts-list/ui/PostList.styles';

export const PostsList = () => (
    <Flex sx={styles.wrapper}>
        {mockPosts.map((post) => (
            <Post
                title={post.title}
                subtitle={post.subTitle}
                avatar={post.image}
                description={post.description}
            />
        ))}
    </Flex>
);
