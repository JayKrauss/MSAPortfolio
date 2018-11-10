import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import SMTCTv from '../SMTCTv/smtctv.js'

class SMTCHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <SMTCTv />
            </div>
        );
    }
}

export default SMTCHome;