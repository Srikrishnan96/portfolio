import React from 'react';
import AppStore from '../store/app-store';

const AppStoreContext = React.createContext(new AppStore());
export const useStore = () => React.useContext(AppStoreContext);