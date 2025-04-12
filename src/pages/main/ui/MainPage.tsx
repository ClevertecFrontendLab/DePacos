import { mockDescriptions } from '~/data/mockDescriptions';
import { mockFooter } from '~/data/mockFooter';
import { mockRecipe } from '~/data/mockRecipes';
import { CookNowBlock } from '~/shared/Cook-now-block/ui/CookNowBlock';
import { PostSection } from '~/shared/Post-section/ui/PostSection';
import { RecipesList } from '~/shared/Recipes-list/ui/RecipesList';
import { Search } from '~/shared/Search/ui/Search';
import { Section } from '~/shared/Section/ui/Section';
import { Slider } from '~/shared/Slider/Slider';

export const MainPage = () => (
    <>
        <Section
            title='Приятного аппетита!'
            textAlign='center'
            margin={{ base: '0 0 32px 0', '2lg': '0 0 56px 0' }}
        >
            <Search />
        </Section>
        <Section
            title='Новые рецепты'
            heading='h2'
            margin={{ base: '0 0 32px 0', '2lg': '0 0 40px 0' }}
        >
            <Slider />
        </Section>
        <Section
            title='Самое сочное'
            heading='h2'
            margin={{ base: '0 0 84px 0', '2lg': '0 0 64px 0' }}
        >
            <RecipesList
                recipeData={mockRecipe.main}
                nameLink='Вся подборка'
                linkPosition='top'
                link='/best-recipe'
            />
        </Section>
        <PostSection />
        <Section
            margin='0'
            title='Веганская кухня'
            heading='h2'
            display='flex'
            description={mockDescriptions.titleVeganDescription}
        >
            <CookNowBlock recipeData={mockFooter.main} cookData={mockFooter.mainBtn} />
        </Section>
    </>
);
