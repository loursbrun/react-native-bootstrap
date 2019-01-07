import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { removeAdress } from '../../redux/actions/adress';


class ExampleScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };


    /**
     * Switch language
     * @param value
     */
    removeAdress(index) {
        this.props.onRemoveAdress(this.props.adress, index);
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
const mapDispatchToProps = (dispatch) => {
    return {

        /**
         * Save Profile Action Creator
         * @param drawerId
         */
        onRemoveAdress: (adress, index) => { dispatch(removeAdress(adress, index)); }
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
        adress: state.adress.adress
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen);
