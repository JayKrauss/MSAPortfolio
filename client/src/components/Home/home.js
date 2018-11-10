import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import HomeTv from '../hometv/hometv.js'

class Home extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <HomeTv />
            </div>
        );
    }
}

export default Home;
