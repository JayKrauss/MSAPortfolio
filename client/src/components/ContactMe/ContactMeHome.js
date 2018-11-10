import React from 'react';
import $ from 'jquery';
import NavBarComponent from '../navbar/navbar';
import ContactMeTv from '../ContactTv/contacttv.js'

class ContactMeHome extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <ContactMeTv />
            </div>
        );
    }
}

export default ContactMeHome;