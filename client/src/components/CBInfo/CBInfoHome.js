import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import CBInfoTv from '../CBInfoTv/cbinfotv.js'

class CBInfoHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <CBInfoTv />
            </div>
        );
    }
}

export default CBInfoHome;