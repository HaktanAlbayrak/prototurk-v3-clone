import { useQuery } from '@tanstack/react-query';
import CategoryCard from '~/components/cards/category';
import Section from '~/components/section';
import Slider from '~/components/slider';
import { getCategories } from '~/services/home';

export default function Categories() {
  const { data, isLoading, isError, error } = useQuery(
    ['categories'],
    () => getCategories(),
    {
      retry: 2,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section
      title='Kendine değer kat!'
      description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
    >
      {isLoading && '...Loading'}
      {isError && (
        <div className='bg-red-50 p-4 text-sm rounded text-red-500'>
          {error.message}
        </div>
      )}
      {data && (
        <Slider
          breakpoints={{
            340: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1170: {
              slidesPerView: 4,
            },
            1370: {
              slidesPerView: 5,
            },
          }}
          items={data}
          render={(item) => <CategoryCard item={item} />}
        />
      )}
    </Section>
  );
}
