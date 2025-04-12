export const ArrowForward = ({ width, color }: { width?: number; color?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width || 22}
        height='14'
        fill='none'
        viewBox='0 0 22 14'
    >
        <path
            fill={color || '#FFFFD3'}
            fillRule='evenodd'
            d='M.5 7a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719A.751.751 0 0 1 15.281.469l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H1.25A.75.75 0 0 1 .5 7'
            clipRule='evenodd'
        ></path>
    </svg>
);
