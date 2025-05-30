export const Burger = ({ width }: { width?: number }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width || 24}
        height='24'
        fill='none'
        viewBox='0 0 24 24'
    >
        <path fill='#000' d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
    </svg>
);
