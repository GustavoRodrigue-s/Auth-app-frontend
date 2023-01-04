import { GlobalStyle } from './commons/styles/GlobalStyle';
import { Theme } from './commons/styles/theme';

import { AuthContextProvider } from './modules/Auth/contexts/AuthContext';

import { AppRoutes } from './routes';

export default function App() {
  return (
    <Theme>
      <AuthContextProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthContextProvider>
    </Theme>
  );
}
