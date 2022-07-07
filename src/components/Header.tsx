import React from "react";
import { Navbar, Container, Nav, Button, Row } from "react-bootstrap";

export default function Header(props: any) {
    const {cartItems} = props;
    const itemsPrice = cartItems.reduce((a: number, c: { price: number; qty: number; }) => a + c.price * c.qty, 0)
    
    return (
        <Row id="navbar">
        <Navbar>
                <Navbar.Brand id="brand">Shopping</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text id="price">
                            { ' '}
                            {itemsPrice.toFixed(2)}€
                        </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
        </Row>
    )
}