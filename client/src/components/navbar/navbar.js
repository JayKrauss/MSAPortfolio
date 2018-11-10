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
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Projects</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/brewersmark">Brewer's Mark</DropdownItem>
                                    <DropdownItem href="/beattheodds">Beat the Odds</DropdownItem>
                                    <DropdownItem href="/bootcampprojects">Bootcamp Projects</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem active>
                              <NavLink to="#">Show Me the Code</NavLink>
                          </NavItem>
                          <NavItem>
                          <Dropdown>
                                <DropdownToggle nav caret>Coding Bootcamp</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Information</DropdownItem>
                                    <DropdownItem href="#">My Experience</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        <NavItem>
                              <NavLink to="#">Resume</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">About Me</NavLink>
                          </NavItem>
                          
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarComponent;