import React from 'react';
import $ from 'jquery';
import './resumetv.css';

function Static() {
        $('#monitorscreen').css('background-image' , 'url(./static.gif)')
    setTimeout(function (){
        $('#monitorscreen').css('background-image' , 'url()')
    }, 600)
    $('#hide').hide();
}

class ResumeTv extends React.Component {

componentDidMount(){
    Static();
    setTimeout(function() {
        $('#hide').show()
        }, 610);
    }   

render(){
    return(
        <div>
        <div id="container">
        <div id="monitor">
        <div id="monitorscreen">
        <div id='hide'>
            <h1>Resume</h1>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

}

export default ResumeTv;