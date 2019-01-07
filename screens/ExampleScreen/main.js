import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { addAdress } from '../../redux/actions/adress';


class ExampleScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

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
const mapDispatchToProps = (dispatch) => {
    return {

        /**
         * Save Profile Action Creator
         * @param drawerId
         */
        getProfile: (data) => {
            onAddAdress: (adress, adress_txt) => { dispatch(addAdress(adress, adress_txt)); }
        }
    }
};



/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const {auth,user} = state;
    return {
        adress: state.adress.adress
    };
};





export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen);
