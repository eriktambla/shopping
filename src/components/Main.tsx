import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";
import Product from "./Product";

export default function Main(props: any) {
    const { products, onAdd } = props;
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Row id="search">
                <Form.Control id="formcontrol"
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}
                    type="text"
                    placeholder="Search"
                />
            </Row>
            <Row id="cardsrow">
                {/* Simple search filter if serach bar is empty return all products. 
                Else return products that start with serchterm. In my opinion better than using the .includes here.*/}
                {products.filter((product: { name: string; }) => {
                    if (searchTerm === "") {
                        return product
                    } else if (product.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                        return product
                    }
                }).map((product: { id: number; }) => (
                    <Product key={product.id} product={product} onAdd={onAdd} />
                ))}
            </Row>
        </div>
    )
}