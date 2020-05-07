import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../hooks';
import { AppBar, Toolbar, Box, Fade, Collapse, makeStyles, Typography, Link } from '@material-ui/core';

const useNavBarStyles = makeStyles({

});

const NavMenu = () => {
  const AppStore = useStore();
  console.log("NAVMENU FLAG VALUE", AppStore.navMenuFlag);

  return (
    <Fade
    in={AppStore.navMenuFlag}
    timeout={500}
    >
      <AppBar color="default" position="fixed" title="Anu Chechi">
        <Toolbar>
          <Link color="textPrimary">
            <Typography variant="h4">Anugraha Rose</Typography>
          </Link>
          <Box color="textPrimary" component="span" marginLeft="30px" marginRight="20px">
            <Typography variant="h6" style={{display: 'inline-block'}}>Work Experience</Typography>
          </Box>
          <Box color="textPrimary" component="span" marginRight="20px">
            <Typography variant="h6" style={{ display: 'inline-block'}}>Projects</Typography>
          </Box>
          <Box color="textPrimary" component="span" marginRight="20px">
            <Typography variant="h6" style={{display: 'inline-block'}}>Education</Typography>
          </Box>
          <Box color="textPrimary" component="span" marginRight="20px">
            <Typography variant="h6" style={{display: 'inline-block'}}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
  </Fade>
  );
}

export default observer(NavMenu);