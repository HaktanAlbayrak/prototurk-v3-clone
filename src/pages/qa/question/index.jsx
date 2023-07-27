import { useParams } from 'react-router-dom';

export default function Question() {
  const { slug } = useParams();

  const [id, ...urls] = slug.split('-');
  const url = urls.join('-');

  return (
    <div>
      <h1>id = {id}</h1>
      <h1>Slug = {url}</h1>
    </div>
  );
}
