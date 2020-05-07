import React, {} from 'react';
import NavbarComp from './components/navbar';
import InfoPaper from './components/work-experience/index';
import { useStore } from './hooks';
import WindowScrollTracker from './components/window-scroll-track';
import { observer } from 'mobx-react';
import { Box, Fade, Typography } from '@material-ui/core';
import { whiteTranslucent, blackTranslucent } from './utils/constants';

const roseAkaImg = '/images/ROSE_AKA_LINEKDIN_IMAGE.PNG';

const App = () => {
  const AppStore = useStore();
  return (
    <WindowScrollTracker>
        <Box component='div'
        style={{
          zIndex: -1,
          backgroundImage: `url(${roseAkaImg})`,
          backgroundSize: 'cover',
          height: '100vh',
          position: 'fixed',
          width: '100%',
          // filter: 'grayscale(80%)',
          }} 
        />
        <NavbarComp />
        <Fade in={!AppStore.navMenuFlag} timeout={500}>
        <Box component="div" style={{textAlign: 'center', height: '100vh', paddingTop: '50vh'}}>
          <Typography variant="caption" style={{textAlign: 'center', color: 'white', height: '100vh', verticalAlign: 'middle', paddingTop: '50vh'}}>SOME GOOD CAPTION FOR ROSE CHECHI</Typography>
        </Box>
        </Fade>
        <InfoPaper backgroundColor={whiteTranslucent} paperTitle={"Work Experience"} />
        <InfoPaper backgroundColor={blackTranslucent} paperTitle={"Work Experience"} />
    </WindowScrollTracker>
  );
}

export default observer(App);