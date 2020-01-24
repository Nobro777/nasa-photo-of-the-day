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
import Alert from "./alert";

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
font-size: 1.5rem;
margin: 0 0 0 5%;
display: flex;
justify-content: space-between;
&:hover{
    opacity: 1;
    cursor: pointer;
}
`
// const AnchorTag = styled.src`
// &:hover{
//     cursor: pointer;
// }
// `

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" onClick={toggle}>Nasa: Picture of the Day</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="public/about.html">What is This Project?</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/Nobro777/nasa-photo-of-the-day" target="_blank">The GitHub Repository</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/components/">Unused</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Unused
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Unused
                            </DropdownItem>
                            <DropdownItem>
                            Unused
                            </DropdownItem>
                            <DropdownItem>
                            Unused
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    
                    </Collapse>
                </Navbar>
            </div>
            <Alert color="warning">Enjoy the Content? <a href ="">Donate</a> to Show Support!</Alert>
        <BodyCard className="container">
            <CardTitle>{props.data.title}</CardTitle>
            <ImageSize src={props.data.hdurl} alt="pic of the day"/>
            <SubTitle>{props.data.copyright}</SubTitle>
            <CardPara>{props.data.explanation}</CardPara>
            <CardDate>-{props.data.date}-</CardDate>
            <Button outline color="danger" onClick={()=>{console.log("I liked it")}}>I Like It</Button>
            <Button outline color="danger" onClick={()=>{console.log("I didn't like it")}}>I Don't Like It</Button>
        </BodyCard>
</div>
);
};

export default Body;