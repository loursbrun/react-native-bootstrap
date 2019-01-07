import React from 'react';
import { Provider } from 'react-redux';
import Navigator from '../containers/navigator';
import {LocaleProvider} from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US';
var view = function(){
    console.log("store is : " + this.state)
	return (
        <LocaleProvider locale={enUS}>
        <Provider store = { this.state.store }>
            <Navigator store = { this.state.store }/>
        </Provider>
        </LocaleProvider>
    );
}
module.exports = view;
