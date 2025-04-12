export const People = ({ width }: { width?: number }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width || 16}
        height='16'
        fill='none'
        viewBox='0 0 16 16'
    >
        <path
            fill='#000'
            d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6'
        ></path>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.216 14A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1z'
            clipRule='evenodd'
        ></path>
        <path fill='#000' d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'></path>
    </svg>
);
