import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Slider() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, margin: 2 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div>
          <Link to="/admin/dashboard" className="text-white">
            Dashboard
          </Link>
        </div>
      </List>
      <Divider />
      <List>
        <div className='text-[0.9rem] mt-4'>
          <Link to="/admin/productmanagement" className="text-white">
            Products Management
          </Link>
        </div>
        <div className='text-[0.9rem] mt-4'>
          <Link to="/admin/usermanagement" className="text-white">
            Users Management
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <RxHamburgerMenu className='text-red-600' />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { backgroundColor: 'black' } }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
