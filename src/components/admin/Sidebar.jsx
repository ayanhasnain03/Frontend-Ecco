import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Admin from '../../pages/admin/admin';
import { Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Slider() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250,margin:2 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
 <div>
 <Link to="/admin/dashboard">
  Dashboard
   </Link>
 </div>
      </List>
      <Divider />
      <List>
     <div className='text-[0.9rem] mt-4'>
      <Link to="/admin/productmanagement">
        Products Management
      </Link>
     </div>
     <div className='text-[0.9rem] mt-4'>
      <Link to="/admin/usermanagement">
        Users Management
      </Link>
     </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <RxHamburgerMenu  className='text-red-600' />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}