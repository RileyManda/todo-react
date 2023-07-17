import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';

const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
