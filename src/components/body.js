import React, { useState } from "react";
import styled from "styled-components";
import { Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from "reactstrap";

const Body = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

const BodyCard = styled.div`
color: black;
background-color: lightgray;
padding: 5%;
border: 2px solid black;
`
const CardTitle = styled.h1`
margin: 5% 5% 5% 5%;
font-size: 2.3rem;
font-family: 'ZCOOL QingKe HuangYou', cursive;
`
const SubTitle = styled.h3`
margin: 5%;
color: white;
font-family: 'Pacifico', cursive;
`
const CardDate = styled.p`
font-size: 1.5rem;
font-weight: bold;
font-family: 'ZCOOL QingKe HuangYou', cursive;
`
const CardPara = styled.p`
margin: 5% 5% 5% 5%;
padding: 5% 0 5% 0;
border-top: 1px solid black;
border-bottom: 1px solid black;
font-family: 'Alata', sans-serif;
`
const ImageSize = styled.img`
width: 85%;
height: auto;
`
const Button = styled.button`
color: black;
margin: 5% 5% 5% 5%;
border-radius: .5rem;
font-weight: bold;
&:hover {
    background-color: orange;
}
`
const NavbarBrand = styled.span`
opacity: .2;
font-size: 1.25rem;
margin: 0 0 0 5%;
display: flex;
justify-content: space-between;
`

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Nasa: Picture of the Day</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/components/">Nav Item 1</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/LambdaSchool/nasa-photo-of-the-day" target="_blank">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/components/">Nav Item 3</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Nav Item 4
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Sub Item 1
                            </DropdownItem>
                            <DropdownItem>
                            Sub Item 2
                            </DropdownItem>
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    
                    </Collapse>
                </Navbar>
            </div>
        <BodyCard className="container">
            <CardTitle>{props.data.title}</CardTitle>
            <ImageSize src={props.data.hdurl} alt="pic of the day"/>
            <SubTitle>{props.data.copyright}</SubTitle>
            <CardPara>{props.data.explanation}</CardPara>
            <CardDate>-{props.data.date}-</CardDate>
            <Button outline color="danger">I Like It</Button>
            <Button outline color="danger">I Don't Like It</Button>
        </BodyCard>
</div>
);
};

export default Body;