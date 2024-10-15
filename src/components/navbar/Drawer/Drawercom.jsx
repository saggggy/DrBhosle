import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
import '../../CSS/Style.css';

const Drawercom = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: '#bd7b49' },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {/* <ListItemButton> */}
            {/* <ListItemIcon> */}
              {/* Add your logo or any additional content here if needed */}
            {/* </ListItemIcon> */}
          {/* </ListItemButton> */}
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: 'black' }}>
                  <Link to={link.path} style={{ color: 'white', textDecoration: 'none' }}>
                    {link.title}
                  </Link>
                </ListItemText>
                <br />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto', color: 'black' }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default Drawercom;
