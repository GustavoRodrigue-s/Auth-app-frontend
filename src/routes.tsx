import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { useAuthContext } from '@modules/Auth/hooks/useAuthContext';

import * as P from './pages';

const PrivateRoutes: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoutes: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/posts" />;
};

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/cadastro" element={<P.RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/posts" element={<P.PostsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
