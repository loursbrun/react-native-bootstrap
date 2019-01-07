/**
 * Mock all the http calls
 */
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {api} from '../../config/index';
import {Environment} from '../../../config'
import {
    login,
    forgotPassword,
    signUp,
    verifyOtp,
    resetPassword,
    getProfile,
    saveProfile,
    changePassword
} from './authentication';

//console.log(api.LOGIN)
/**
 * Mock only when mock is enabled in config
 */
if(Environment.TESTING){
    var mock = new MockAdapter(axios);
    /**
     * arguments for reply are (status, data, headers)
     */
    mock.onPost(api.LOGIN).reply(login);
    mock.onPost(api.FORGOT).reply(forgotPassword);
    mock.onPost(api.REGISTER).reply(signUp);
    mock.onPost(api.VERIFY_OTP).reply(verifyOtp);
    mock.onPost(api.RESET_PASSWORD).reply(resetPassword);
    mock.onGet(api.GET_PROFILE).reply(getProfile);
    mock.onPost(api.SAVE_PROFILE).reply(saveProfile);
    mock.onPost(api.CHANGE_PASSWORD).reply(changePassword);
};

