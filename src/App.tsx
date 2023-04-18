import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import FormEntity from 'src/components/FormEntity/FormEntity';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Routes>
            <Route path="/" element={<FormEntity />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
