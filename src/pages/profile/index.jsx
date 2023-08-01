import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { setSidebarType } from '~/stores/app/actions';

export default function Profile() {
  useEffect(() => {
    setSidebarType('profile');
    return () => {
      setSidebarType('app');
    };
  }, []);
  return <Outlet />;
}
