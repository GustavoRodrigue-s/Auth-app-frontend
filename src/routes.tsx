import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { useAuthContext } from './modules/Auth/hooks/useAuthContext';

import { LoginPage, RegisterPage, PostsPage } from './pages';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/posts" element={<PostsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
