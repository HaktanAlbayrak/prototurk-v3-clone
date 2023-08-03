import { useParams } from 'react-router-dom';
import OpacityContent from '~/components/animated/opacity';

export default function ArticleDetail() {
  const { slug } = useParams();

  return <OpacityContent>Makale Detayı = {slug}</OpacityContent>;
}
