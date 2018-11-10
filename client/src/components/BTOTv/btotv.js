import React from 'react';
import $ from 'jquery';
import './btotv.css';
import BeatGif from '../../images/beattheodds.gif';

function Static() {
        $('#monitorscreen').css('background-image' , 'url(./static.gif)')
    setTimeout(function (){
        $('#monitorscreen').css('background-image' , 'url()')
    }, 600)
    $('#hide').hide();
}

class BTOTv extends React.Component {

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
        
        <div className="container">
          <div className="row">
          <center>
                <div className='col-md-12 beat'>
                  <img src={BeatGif} id='beatgif' />
                </div>
                <div className='col-md-12 beat'>
                  <div className="card-body portcard">
                    <h5 className="card-title">Beat The Odds</h5>
                    <p className="card-text">Beat the Odds was a project designed to take historic NFL games, condense them down into a two minute window, and show the game graphically. The user is then able to place a bet on the teams displayed, with a payout decided by score differential.</p>
                    <a href="https://jaykrauss.github.io/BeatTheOdds/" className="btn btn-primary">Check it out!</a>
                  </div>
                </div>
                </center>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

}

export default BTOTv;