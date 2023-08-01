import { categories } from '~/fake-api';
import MenuItem from '../menu/item';

export default function Categories() {
  const filteredCategories = categories.reduce(
    (acc, curr) => [
      ...acc,
      {
        path: `/${curr.slug}`,
        title: curr.title,
      },
    ],
    []
  );

  return (
    <section className='pt-5 mt-5 border-t dark:border-zinc-700'>
      {filteredCategories.map((category, index) => (
        <MenuItem item={category} key={index} />
      ))}
    </section>
  );
}
