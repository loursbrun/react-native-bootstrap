import React, { Component } from 'react';
import ComponentView from './view';

class Main extends React.Component {
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

export default Main;
