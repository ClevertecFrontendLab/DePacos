import { ReactNode } from 'react';

import { Desserts } from '~/assets/icons/Desserts';
import { FirstCourses } from '~/assets/icons/FirstCourses';
import { Grill } from '~/assets/icons/Grill';
import { National } from '~/assets/icons/National';
import { Salads } from '~/assets/icons/Salads';
import { SecondCourses } from '~/assets/icons/SecondCourses';
import { Vegan } from '~/assets/icons/Vegan';
import { ChildrenFood } from '~/assets/icons/СhildrenFood';
import cook from '~/assets/images/avatars/cook.png';
import visickaya from '~/assets/images/avatars/visockaya.png';
import cutlets from '~/assets/images/products/cutlets.jpg';
import kneli from '~/assets/images/products/kneli.jpg';
import lapsha from '~/assets/images/products/lapsha.jpg';
import lazan from '~/assets/images/products/lazan.jpg';
import oladi from '~/assets/images/products/oladi.jpg';
import potato from '~/assets/images/products/potato.jpg';
import potatoGarlic from '~/assets/images/products/potatoGarlic.jpg';
import potatoRuls from '~/assets/images/products/potatoRuls.jpg';
import puri from '~/assets/images/products/puri.jpg';
import salati from '~/assets/images/products/salati.jpg';
import solyanka from '~/assets/images/products/solyanka.jpg';
import tefteli from '~/assets/images/products/tefteli.jpg';
import tomyam from '~/assets/images/products/tomyam.jpg';
import vetchina from '~/assets/images/products/vetchina.jpg';

export type MockRecipes = {
    title: string;
    description: string;
    category: string;
    image?: string;
    likes: number;
    bookmarks: number;
    icon: ReactNode;
};

export const mockRecipe = {
    main: [
        {
            title: 'Кнели со спагетти',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: kneli,
            likes: 152,
            bookmarks: 85,
            icon: <SecondCourses width={20} />,
        },
        {
            title: 'Пряная ветчина по итальянски',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: vetchina,
            likes: 257,
            bookmarks: 159,
            icon: <SecondCourses width={20} />,
            recommendedBy: {
                name: 'Елена Высоцкая',
                avatar: visickaya,
            },
        },
        {
            title: 'Лапша с курицей и шафраном',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: lapsha,
            likes: 342,
            bookmarks: 258,
            icon: <SecondCourses width={20} />,
            recommendedBy: {
                name: 'Alex cook',
                avatar: cook,
            },
        },
        {
            title: 'Том-ям с капустой кимчи',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Национальные',
            image: tomyam,
            icon: <National width={20} />,
            likes: 324,
            bookmarks: 124,
        },
    ],
    vegan: [
        {
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            category: 'Национальные',
            image: potato,
            likes: 152,
            bookmarks: 85,
            icon: <National width={20} />,
        },
        {
            title: 'Картофельные рулетики с грибами',
            description:
                'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
            category: 'Детские блюда',
            image: potatoRuls,
            likes: 152,
            bookmarks: 85,
            icon: <ChildrenFood width={20} />,
        },
        {
            title: 'Том-ям с капустой кимчи',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Национальные',
            image: tomyam,
            icon: <National width={20} />,
            likes: 324,
            bookmarks: 124,
        },
        {
            title: 'Овощная лазанья из лаваша',
            description:
                'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
            category: 'Блюда на гриле',
            image: lazan,
            likes: 152,
            bookmarks: 85,
            icon: <Grill width={20} />,
        },
        {
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            description:
                'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            category: 'Вторые блюда',
            image: tefteli,
            likes: 152,
            bookmarks: 85,
            icon: <SecondCourses width={20} />,
        },
        {
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            description:
                'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            category: 'Вторые блюда',
            image: tefteli,
            likes: 152,
            bookmarks: 85,
            icon: <SecondCourses width={20} />,
        },
        {
            title: 'Чесночная картошка',
            description:
                'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
            category: 'Национальные',
            image: potatoGarlic,
            likes: 324,
            bookmarks: 124,
            icon: <National width={20} />,
        },
        {
            title: 'Чесночная картошка',
            description:
                'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
            category: 'Национальные',
            image: puri,
            likes: 324,
            bookmarks: 124,
            icon: <National width={20} />,
        },
    ],
    best: [
        {
            title: 'Лапша с курицей и шафраном',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: lapsha,
            likes: 342,
            bookmarks: 258,
            icon: <SecondCourses width={20} />,
            recommendedBy: {
                name: 'Alex cook',
                avatar: cook,
            },
        },
        {
            title: 'Том-ям с капустой кимчи',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Национальные',
            image: tomyam,
            icon: <National width={20} />,
            likes: 324,
            bookmarks: 124,
        },
        {
            title: 'Пряная ветчина по итальянски',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: vetchina,
            likes: 257,
            bookmarks: 159,
            icon: <SecondCourses width={20} />,
            recommendedBy: {
                name: 'Елена Высоцкая',
                avatar: visickaya,
            },
        },
        {
            title: 'Кнели со спагетти',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            image: kneli,
            likes: 152,
            bookmarks: 85,
            icon: <SecondCourses width={20} />,
        },
        {
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            category: 'Национальные',
            image: potato,
            likes: 180,
            bookmarks: 120,
            icon: <National width={20} />,
        },
        {
            title: 'Картофельные рулетики с грибами',
            description:
                'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
            category: 'Детские блюда',
            image: potatoRuls,
            likes: 180,
            bookmarks: 85,
            icon: <ChildrenFood width={20} />,
        },
        {
            title: 'Овощная лазанья из лаваша',
            description:
                'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
            category: 'Блюда на гриле',
            image: lazan,
            likes: 152,
            bookmarks: 85,
            icon: <Grill width={20} />,
        },
        {
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            description:
                'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            category: 'Вторые блюда',
            image: tefteli,
            likes: 150,
            bookmarks: 80,
            icon: <SecondCourses width={20} />,
        },
    ],
};

export const mockRecipeSlider = [
    {
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Первые блюда',
        image: solyanka,
        likes: null,
        bookmarks: 1,
        icon: <FirstCourses width={16} />,
    },
    {
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        category: 'Веганские блюда',
        image: cutlets,
        likes: 2,
        bookmarks: 1,
        icon: <Vegan width={16} />,
    },
    {
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: 'Десерты, выпечка',
        image: oladi,
        likes: 2,
        bookmarks: null,
        icon: <Desserts width={16} />,
    },
    {
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: 'Салаты',
        image: salati,
        likes: null,
        bookmarks: null,
        icon: <Salads width={16} />,
    },
];
