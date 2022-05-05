import {combineReducers} from 'redux';
import auth from '../src/auth/redux/reducer/auth'
import home from '../src/home/redux/reducer/home'
import BannerAlert from '../src/custom_alert/redux/reducer/BannerAlert'

export default combineReducers({
    auth,
    home,
    BannerAlert
})