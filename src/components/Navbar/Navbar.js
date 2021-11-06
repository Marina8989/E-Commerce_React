import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import {ShoppingCart} from '@mui/icons-material';

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    return(
         <>
           <AppBar position='fixed' className={classes.appBar} color='inherit'>
              <Toolbar>
                  <Typography variant='h6' className={classes.title} color='inherit'>
                     <img src='https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg' alt='E-Shop' height='25px' className={classes.image} />
                     E-Shop
                  </Typography>
                  <div className={classes.grow}></div>
                  <div className={classes.button}>
                      <IconButton aria-label='Show cart items' color='inherit'>
                          <Badge badgeContent={2} color='secondary'>
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div>
              </Toolbar>
           </AppBar>
         </>
    )
}

export default Navbar