import React, { useState } from 'react';
// import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Input,
    Form,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledCarousel
} from 'reactstrap'
import {  MDBIcon } from "mdbreact";
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';

function TopNavbar(props) {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }

    // const authLinks = (
    //     <UncontrolledDropdown nav inNavbar>
    //         <DropdownToggle nav caret>
    //             <span style={{color:'white'}}>{this.props.auth.user?this.props.auth.user.name:"User"}</span>
    //         </DropdownToggle>
    //         <DropdownMenu right>
    //             <DropdownItem>
    //             Option 1
    //             </DropdownItem>
    //             <DropdownItem>
    //             Option 2
    //             </DropdownItem>
    //             <DropdownItem divider />
    //             <DropdownItem href="/logout">
    //                 {/* <NavLink href="/logout" style={{color:'black'}}>Logout</NavLink> */}
    //                 Logout
    //             </DropdownItem>
    //         </DropdownMenu>
    //     </UncontrolledDropdown>
    // )

    const guestLinks = (
        <NavItem>
        <LoginModal/>
        </NavItem>
    )

    // const authnoti = (
    //     <NavItem>
    //     <NavLink href="/noti" ><img src="./notif3.png" alt="hi" style={{width:'23px'}}></img></NavLink>
    //     </NavItem>
    // )

    const guestReg = (
        <NavItem>
        <RegisterModal/>
        </NavItem>
    )
    
    return (
        <div>
            {/* color="primary" */}
            <Navbar style={{backgroundColor:'#2874f0'}} dark expand="sm" className="mb-5"> {/* color - #172337 */}
                <Container>
                    <NavbarBrand href="/">WebSite</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    
                    {/* <Nav navbar>
                            <NavItem>
                                <NavLink href="/cart">Cart</NavLink>
                            </NavItem>
                        </Nav> */}
                    <Collapse isOpen={isOpen} navbar>
                    <Form inline class="form-inline my-2 my-lg-0">
                    <Input type="search" className="form-control mr-sm-2" placeholder="Search"/>
                    <button class="serachicon" style={{backgroundColor: '#2874f0', border:'none'}}>
                    <MDBIcon icon="search" style={{color: "white"}}/>
                    </button>
                    </Form>
                        <Nav className="ml-auto" navbar>

                            {/* { this.props.auth.token ? authLinks : guestLinks } */}
                            {/* { this.props.auth.token ? authnoti : guestReg } */}
                            {guestLinks}
                            {guestReg}
                            
                            {/* <NavItem>
                                    <LoginModal/>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="#"><img src="./cart.png" alt="hi" style={{width:'22px'}}></img></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            

        
            <div class="topnav">
                {/* <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a> */}
                <div class="dropdowncss">
                    <button class="dropbtn">Bean Bag 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">T-Shirt 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Curtains
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Shirt
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                    </div> 
                    <div class="dropdowncss">
                    <button class="dropbtn">Saree
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Trosers
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Hoodies
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                </div>

        </div>
      )
}

export default TopNavbar;