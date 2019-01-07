import React, { Component } from 'react';
import ComponentView from './view';
import Spinner from '../../components/spinner';
import { ActionNames, createAction } from '@app-redux/actions';
import preProcess from '../preprocess';
import { Toast } from 'antd-mobile';
/**
 * @description profile container
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        this.getProfile()
        return fetch('http://www.mocky.io/v2/5bb5fc293000005d00aabf9d')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.adresses,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    /**
     * Action Share button 
     */
    onPress = () => {
        console.log('Share Pressed ! ')
    }
    /**
    * Action Compare button 
    */
    onPressWidthValue = (value) => {
        console.log("Value passed :" + value)
    }
    /**
    * Action Liked button 
    */
    onPressWidthItemValues = (item) => {
        console.log("Adresse :" + item.adress)
        console.log("Liked :" + item.liked)
        console.log("Premium :" + item.premium)
    }
    /**
     * Get profile
     */
    getProfile() {
        const { translate } = this.props;
        Spinner.start();
        this.props.getProfile().then(() => {
            Spinner.stop();
        }).catch((err) => {
            Spinner.stop();
            Toast.fail(translate("profile.error"), 0.5);
        })
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
       
        return (ComponentView.bind(this))();
    }
}


/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {

        /**
         * Save Profile Action Creator
         * @param drawerId
         */
        getProfile: (data) => {
            return dispatch(createAction(ActionNames.GET_PROFILE, data))
        }
    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const { auth, user } = state;
    return {
        auth,
        user
    };
};
Main.displayName = "Profile";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});


