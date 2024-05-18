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
        <div className="my-2">
          <Link to="/admin/dashboard" className="text-white text-lg">
            Dashboard
          </Link>
        </div>
      </List>
      <Divider className="bg-gray-700" />
      <List>
        {[
          { path: '/admin/productmanagement', label: 'Products Management' },
          { path: '/admin/usermanagement', label: 'Users Management' },
          { path: '/admin/ordermanagement', label: 'Order Management' },
          { path: '/admin/couponmanagement', label: 'Coupon Management' },
        ].map((item) => (
          <div key={item.path} className="my-[6rem]">
            <Link to={item.path} className="text-white text-lg">
              {item.label}
            </Link>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <RxHamburgerMenu className="text-red-600" />
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
