import { Icon } from '@chakra-ui/react';

export const AccordionArrow = ({ isExpanded }: { isExpanded: boolean }) => (
    <Icon
        viewBox='0 0 24 24'
        boxSize={6}
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}
        transition='transform 0.3s ease'
    >
        <path d='M6 9l6 6 6-6' />
    </Icon>
);
