import ArticleCard from '~/components/cards/article';
import Pagination from '~/components/pagination';
import Section from '~/components/section';
import { articles } from '~/fake-api';

export default function Articles() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Section title='Makaleler'>
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
          {articles.map((article, index) => (
            <ArticleCard style={false} key={index} item={article} />
          ))}
        </div>
        <Pagination count={24} />
      </Section>
    </div>
  );
}
