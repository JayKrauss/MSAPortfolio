import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import BCPTv from '../BCPTv/bcptv.js'

class BCPHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <BCPTv />
            </div>
        );
    }
}

export default BCPHome;