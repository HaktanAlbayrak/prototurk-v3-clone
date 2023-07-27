import { useParams } from 'react-router-dom';

export default function ArticleDetail() {
  const { slug } = useParams();

  return <div>Makale Detayı = {slug}</div>;
}
