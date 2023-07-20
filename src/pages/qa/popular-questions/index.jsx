import { useEffect } from 'react';
import { setSidebarType } from '~/stores/app/actions';

export default function PopularQuestions() {
  useEffect(() => {
    setSidebarType('qa');
    return () => {
      setSidebarType('app');
    };
  }, []);

  return (
    <div>
      <h1>Populer Questions</h1>
    </div>
  );
}
