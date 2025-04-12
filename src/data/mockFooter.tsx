import { ReactNode } from 'react';

import { FirstCourses } from '~/assets/icons/FirstCourses';
import { National } from '~/assets/icons/National';
import { SecondCourses } from '~/assets/icons/SecondCourses';
import { Vegan } from '~/assets/icons/Vegan';
import { ChildrenFood } from '~/assets/icons/СhildrenFood';

export type MockFooter = {
    title: string;
    description: string;
    category: string;
    image: string;
    likes: number;
    bookmarks: number;
    icon: ReactNode;
};

export type MockFooterBtn = Pick<MockFooter, 'title' | 'icon'>;

export const mockFooter = {
    main: [
        {
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            category: 'Вторые блюда',
            likes: 1,
            bookmarks: 1,
            icon: <SecondCourses />,
        },
        {
            title: 'Капустные котлеты',
            description:
                'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
            category: 'Вторые блюда',
            likes: 2,
            bookmarks: 1,
            icon: <SecondCourses />,
        },
    ],
    vegan: [
        {
            title: 'Бананово-молочное желе',
            description:
                'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
            category: 'Детские блюда',
            likes: 1,
            bookmarks: 1,
            icon: <ChildrenFood />,
        },
        {
            title: 'Нежный сливочно-сырный крем для кексов\n',
            description:
                'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
            category: 'Детские блюда',
            likes: 1,
            bookmarks: 1,
            icon: <ChildrenFood />,
        },
    ],
    mainBtn: [
        {
            title: 'Стейк для вегетарианцев',
            icon: <SecondCourses />,
        },
        {
            title: 'Котлеты из гречки и фасоли',
            icon: <SecondCourses />,
        },
        {
            title: 'Сырный суп с лапшой и брокколи',
            icon: <FirstCourses />,
        },
    ],
    veganBtn: [
        {
            title: 'Домашние сырные палочки',
            icon: <ChildrenFood />,
        },
        {
            title: 'Панкейки',
            icon: <National />,
        },
        {
            title: 'Воздушное банановое печенье на сковороде\n',
            icon: <Vegan />,
        },
    ],
};
