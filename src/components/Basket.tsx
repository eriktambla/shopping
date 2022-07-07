import { Button, Col, Container, Row } from "react-bootstrap";

export default function Basket(props: any) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a: number, c: { price: number; qty: number; }) => a + c.price * c.qty, 0)
    
    return (
        <Container>
            <h2 id="thecart">Cart</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {cartItems.map((item: {
                qty: number;
                price: number;
                id: number;
                name: string;
            }) => (
                <div id="carttable">
                    <Row>
                        <Col sm={6}>
                            {item.name}
                        </Col>
                        <Col sm={3}>
                            {item.qty} x {item.price ? item.price.toFixed(2) : 0}
                        </Col>
                        <Col sm={4}>
                            <Button id="plusbtn" onClick={() => onAdd(item)}>+</Button>
                            <Button id="minusbtn" onClick={() => onRemove(item)}>-</Button>
                        </Col>
                    </Row>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div>Items Price</div>
                    <div>{itemsPrice.toFixed(2)}€</div>
                </>
            )}
        </Container>
    )
}