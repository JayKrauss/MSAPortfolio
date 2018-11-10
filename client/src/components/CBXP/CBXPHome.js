import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import CBXPTv from '../CBXPTv/cbxptv.js'

class CBXPHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <CBXPTv />
            </div>
        );
    }
}

export default CBXPHome;