import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, InputBase, Switch, alpha } from '@mui/material';
import Search from './Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const MyAppBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Search />
          <div sx={{ marginLeft: 1, marginRight: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            <Switch color="default" checked={darkMode} onChange={handleDarkModeToggle} />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default MyAppBar;
