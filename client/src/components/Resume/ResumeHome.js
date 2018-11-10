import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import ResumeTv from '../ResumeTv/resumetv.js'

class ResumeHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <ResumeTv />
            </div>
        );
    }
}

export default ResumeHome;