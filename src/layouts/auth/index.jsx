import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/stores/auth/hooks';

export default function AuthLayout({ children }) {
  const user = useAuth();
  const redirect = useNavigate();

  useEffect(() => {
    if (!user) {
      redirect('/', {
        replace: true,
      });
      return null;
    }
  }, [user]);

  if (user) {
    return children;
  }
}
