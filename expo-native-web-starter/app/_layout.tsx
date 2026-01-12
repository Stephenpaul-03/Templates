import { Slot } from 'expo-router';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider, useTheme } from '@/src/context/ThemeContext';
import { store } from '@/src/store';
import { UIProvider } from '@/src/utils/ui-provider';

function AppUI({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <UIProvider mode={theme}>
      {children}
    </UIProvider>
  );
}

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <AppUI>
          <Slot />
        </AppUI>
      </ThemeProvider>
    </ReduxProvider>
  );
}
