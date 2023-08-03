import { useParams } from 'react-router-dom';
import OpacityContent from '~/components/animated/opacity';

export default function User() {
  const { slug } = useParams();
  return <OpacityContent>User page = {slug}</OpacityContent>;
}
