import React from 'react';
import { AppBar, Grid, Toolbar, Tabs, Tab, Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../CSS/Style.css';
// import sc from "../Photo/logo.png";
import Drawercom from './Drawer/Drawercom';
import menu from '../../menu.json'; 
// Ensure menu.json contains an array of objects with { title: string, path: string } structure

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  return (
    <AppBar>
      <Toolbar className='hee py-3'>
        {isMatch ? (
          <>
            <Typography className='zz'>
              {/* <div className="navbar-brand">
                <img className='hed-1 d-non' src={sc} alt="" style={{ filter: 'invert(32%) sepia(96%) saturate(1511%) hue-rotate(210deg) brightness(100%) contrast(101%)' }} />
              </div> */}
            </Typography>
            <Drawercom links={menu} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={2}>
              <Typography className='zz'>
                {/* <div className="navbar-brand">
                  <img className='hed-1 d-non' src={sc} alt="" style={{ filter: 'invert(32%) sepia(96%) saturate(1511%) hue-rotate(210deg) brightness(100%) contrast(101%)' }} />
                </div> */}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                className='nav-change-color'
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, val) => setValue(val)}
                sx={{ '& .MuiTabs-indicator': { backgroundColor: '#FF4500' } }} // Custom indicator color
              >
                {menu.map((link, index) => (
                  <Tab className='head-hov' key={index} label={link.title} component={Link} to={link.path} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box className="Icon-ani">
                <ul>
                  <li>
                    <Link to="https://x.com/dramitbhosle?s=11">
                      <i className="bi bi-twitter text-light"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/dramitbhosle?igsh=MXJnYWl4dmI2aXN4aw%3D%3D&utm_source=qr">
                      <i className="bi bi-instagram text-light"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/dramitbhosle?mibextid=LQQJ4d">
                      <i className="bi bi-facebook text-light"></i>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
