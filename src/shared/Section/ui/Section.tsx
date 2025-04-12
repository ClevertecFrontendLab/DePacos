// shared/ui/section/ui/Section.tsx

import { Box, Heading, ResponsiveValue, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { getStyles } from './Section.styles';

type Props = {
    title: string;
    description?: string | ReactNode | undefined;
    heading?: 'h1' | 'h2' | 'h3';
    children?: ReactNode;
    display?: 'flex' | 'block';
    textAlign?: 'left' | 'right' | 'center';
    bgColor?: string;
    margin?: ResponsiveValue<string | undefined>;
};

export const Section = ({
    title,
    description,
    heading = 'h1',
    children,
    display = 'block',
    textAlign = 'left',
    bgColor = 'inherit',
    margin,
}: Props) => {
    const styles = getStyles({ heading, textAlign, display, description });

    return (
        <Box as='section' sx={styles.wrapper(bgColor, margin)}>
            <Box sx={styles.inner}>
                <Heading as={heading} sx={styles.heading}>
                    {title}
                </Heading>

                {description && <Text sx={styles.description}>{description}</Text>}
            </Box>

            <Box sx={styles.children}>{children}</Box>
        </Box>
    );
};
