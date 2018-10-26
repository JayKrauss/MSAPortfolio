import React from 'react';
import $ from 'jquery';

function Static() {
        $('#screen').css('background-image' , 'url(./static.gif)')
    setTimeout(function (){
        $('#screen').css('background-image' , 'url()')
    }, 3000)
    }

class Home extends React.Component {
    componentDidMount(){
        Static();
    }    

    render(){
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;
