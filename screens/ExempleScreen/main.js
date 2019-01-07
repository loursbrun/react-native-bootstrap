import React from 'react';

export default class Main extends React.Component {
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