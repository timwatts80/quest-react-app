import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import FormEntity from 'src/components/FormEntity/FormEntity';

//Test - Tim

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw'
        }}>
          <Box sx={{
            width: '100%',
            maxWidth: '550px'
          }}>
            <Routes>
              <Route path="/" element={<FormEntity />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
