import React, { useEffect } from "react";
import { useStore } from '../hooks';
import { observer } from 'mobx-react';

const WindowScrollTracker = (props) => {
    const AppStore = useStore();
    const { children } = props;
    const handleScroll = () => {
        const newScrollPosY = window.scrollY;
        AppStore.screenScrollYControl(newScrollPosY);
        AppStore.navMenuFlagControl(newScrollPosY > 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [AppStore.screenScrollY]);

    return <React.Fragment>
        {children}
    </React.Fragment>
}

export default observer(WindowScrollTracker);