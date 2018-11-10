import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import BFMTv from '../BFMTv/bfmtv.js'

class BFMHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <BFMTv />
            </div>
        );
    }
}

export default BFMHome;