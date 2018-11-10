import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import BTOTv from '../BTOTv/btotv.js'

class BTOHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <BTOTv />
            </div>
        );
    }
}

export default BTOHome;