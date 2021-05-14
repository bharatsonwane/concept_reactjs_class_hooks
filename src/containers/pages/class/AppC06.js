import React, { Component } from 'react'
import './resources/class06-styling/globalCSS/GlobalStylesheet'
import mdl from './resources/class06-styling/appStylesModule.module.css'
import AppStylesModule from './resources/class06-styling/moduleCSS/AppStylesModule'
import Inline from './resources/class06-styling/inlineCSS/Inline'


export class AppC06 extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={mdl.success}>AppC06 Success</h1>
                <AppStylesModule/>
                <Inline />
                
            </React.Fragment>
        )
    }
}

export default AppC06
