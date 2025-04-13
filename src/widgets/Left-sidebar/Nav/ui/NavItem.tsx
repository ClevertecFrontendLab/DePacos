import { AccordionButton, AccordionItem, AccordionPanel, Text, VStack } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { useLocation } from 'react-router';

import { AccordionArrow } from '~/assets/icons/AccordionArrow';

import { getStyles } from './styles/NavItem.styles';

type NavItemProps = {
    icon: ReactElement;
    label: string;
    children: ReactNode;
    url?: string | undefined;
} & React.ComponentProps<typeof AccordionButton>;

export const NavItem = ({ icon, label, children, url, ...props }: NavItemProps) => {
    const { pathname } = useLocation();
    const isCurrentUrl = pathname === url;

    return (
        <AccordionItem border='none'>
            {({ isExpanded }) => {
                const styles = getStyles(isExpanded);

                return (
                    <>
                        <AccordionButton
                            {...props}
                            sx={{
                                ...styles.button,
                                backgroundColor:
                                    isExpanded || isCurrentUrl ? 'lime.100' : 'transparent',
                            }}
                        >
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
};