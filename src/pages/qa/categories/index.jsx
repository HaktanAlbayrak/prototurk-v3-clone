import { useEffect } from 'react';
import { setSidebarType } from '~/stores/app/actions';

export default function Categories() {
  useEffect(() => {
    setSidebarType('qa');
    return () => {
      setSidebarType('app');
    };
  }, []);

  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
}
