import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import PageParent from 'src/components/PageParent/PageParent';
import MyLayout from './layout';
// import FormEntity from './components/FormEntity/FormEntity';
import { Stack } from '@mui/material';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={
            <MyLayout />        
          } />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
