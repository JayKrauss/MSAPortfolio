import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import BMTv from '../BMTv/bmtv.js'

class BMHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <BMTv />
            </div>
        );
    }
}

export default BMHome;