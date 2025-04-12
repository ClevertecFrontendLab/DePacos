export const MainPageMobile = ({ width }: { width?: number }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width || 40}
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <rect width='40' height='40' fill='#000' rx='20'></rect>
        <path
            fill='#FFFFD3'
            fillRule='evenodd'
            d='M14 25.5V19h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V19h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5m11-11V18l-2-2v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5'
            clipRule='evenodd'
        ></path>
        <path
            fill='#FFFFD3'
            fillRule='evenodd'
            d='M19.293 13.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L20 14.207l-6.646 6.647a.5.5 0 0 1-.708-.708z'
            clipRule='evenodd'
        ></path>
    </svg>
);
