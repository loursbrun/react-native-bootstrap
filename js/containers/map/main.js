import React, { Component } from 'react';
import ComponentView  from './view';
/**
 * @description Sample Component
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props){
        super(props);
        this.state = {
            region : {
                latitude: 43.675819,
                longitude: 7.289429,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }
    /**
     * ComponentDidMount Hook
     */
    componentDidMount(){

    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "Sample-Component";
