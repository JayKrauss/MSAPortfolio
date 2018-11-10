import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './navbar.css';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong className='navtext'>Jay Krauss</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                        <NavItem active>
                              <DropdownItem className='navtext' href="/home">Home</DropdownItem>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret className='dmnavtext'>Projects</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className='ddnavtext' href="/brewersmark">Brewer's Mark</DropdownItem>
                                    <DropdownItem className='ddnavtext' href="/beattheodds">Beat the Odds</DropdownItem>
                                    <DropdownItem className='ddnavtext' href="/brewsforme">Brewsfor.me</DropdownItem>
                                    <DropdownItem className='ddnavtext' href="/bootcampprojects">Bootcamp Projects</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem active>
                                <DropdownItem className='navtext' href="/showmethecode">Show Me The Code</DropdownItem>
                          </NavItem>
                          <NavItem>
                          <Dropdown>
                                <DropdownToggle nav caret className='dmnavtext'>Coding Bootcamp</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className='ddnavtext' href="/bootcampinfo">Information</DropdownItem>
                                    <DropdownItem className='ddnavtext' href="/bootcampxp">My Experience</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        <NavItem>
                                <DropdownItem className='navtext' href="/resume">Resume</DropdownItem>
                          </NavItem>
                          <NavItem>
                                <DropdownItem className='navtext' href="/contact">Contact Me</DropdownItem>
                          </NavItem>
                          
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarComponent;