import { useEffect } from 'react';
import { setSidebarType } from '~/stores/app/actions';

export default function UnansweredQuestion() {
  useEffect(() => {
    setSidebarType('qa');
    return () => {
      setSidebarType('app');
    };
  }, []);

  return (
    <div>
      <h1>Unanswered Questions</h1>
    </div>
  );
}
