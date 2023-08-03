import Categories from './sections/categories';
import LastQuestions from './sections/last-questions';
import Articles from './sections/articles';
import LastUsers from './sections/last-users';
import SocialCard from '~/components/cards/social';
import OpacityContent from '~/components/animated/opacity';

export default function Home() {
  return (
    <OpacityContent className='max-w-[1200px] mx-auto'>
      <Categories />

      <SocialCard
        type='twitter'
        callToActionUrl='https://twitter.com/prototurkcom'
      />

      <LastQuestions />
      <Articles />

      <SocialCard
        type='instagram'
        callToActionUrl='https://instagram.com/prototurk.official'
      />

      <LastUsers />
      <SocialCard
        type='telegram'
        callToActionUrl='https://t.me/prototurk'
        callToActionText='Gruba Katıl'
      />
    </OpacityContent>
  );
}
