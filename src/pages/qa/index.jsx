import { useEffect } from 'react';
import OpacityContent from '~/components/animated/opacity';
import { setSidebarType } from '~/stores/app/actions';

export default function QADashboard() {
  useEffect(() => {
    setSidebarType('qa');
    return () => {
      setSidebarType('app');
    };
  }, []);

  return (
    <OpacityContent>
      <h1>QADashboard</h1>
    </OpacityContent>
  );
}
