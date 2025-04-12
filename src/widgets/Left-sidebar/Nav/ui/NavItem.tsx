import { AccordionButton, AccordionItem, AccordionPanel, Text, VStack } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

import { AccordionArrow } from '~/assets/icons/AccordionArrow';

import { getStyles } from './styles/NavItem.styles';

type NavItemProps = {
    icon: ReactElement;
    label: string;
    children: ReactNode;
} & React.ComponentProps<typeof AccordionButton>;

export const NavItem = ({ icon, label, children, ...props }: NavItemProps) => (
    <AccordionItem border='none'>
        {({ isExpanded }) => {
            const styles = getStyles(isExpanded);

            return (
                <>
                    <AccordionButton {...props} sx={styles.button}>
                        {icon}
                        <Text sx={styles.label}>{label}</Text>
                        <AccordionArrow isExpanded={isExpanded} />
                    </AccordionButton>

                    <AccordionPanel sx={styles.panel}>
                        <VStack sx={styles.stack}>{children}</VStack>
                    </AccordionPanel>
                </>
            );
        }}
    </AccordionItem>
);
