import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';



// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor: '#2C6C73'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
           <Avatar alt="La Correntosa" src="/static/images/avatar/2.jpg" />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontStyle: "italic",display: { xs: 'none', md: 'flex' } }}>La Correntosa</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontStyle: "italic",display: { xs: 'flex', md: 'none' } }}></Typography>
          <Box sx={{display: "flex", flexDirection: {md: "row", xs: "row-reverse"}, alignItems: "center"}}>
          <Avatar component="div" alt="Remy Sharp"  sx={{marginRight: 2,}} />
          {/* Nombre de usuario */}
          <Typography component="div" sx={{mr: 2}}>Mariano Lopez</Typography>
          </Box>
        </Toolbar>
    </AppBar>
    </Box>
  );
};