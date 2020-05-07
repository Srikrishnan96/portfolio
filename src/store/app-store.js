import { observable, action, decorate } from 'mobx';

class AppStore {
    navBarDisplay = 'none';
    screenScrollY = window.scrollY;
    navMenuFlag = false;

    navMenuFlagControl(flag) {
        this.navMenuFlag = flag;
    }
    navBarDisplayControl(display) {
        this.navBarDisplay = display;
    }
    screenScrollYControl(newScrollY) {
        this.screenScrollY = newScrollY;
    }
}

const observables = {
    navBarDisplay: observable,
    screenScrollY: observable,
    navMenuFlag: observable
}
const actions = {
    navBarDisplayControl: action,
    screenScrollYControl: action,
    navMenuFlagControl: action
}
export default decorate(AppStore, {
    ...observables, ...actions, 
})