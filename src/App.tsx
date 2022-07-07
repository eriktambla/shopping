import React, { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from "./data";
import { Col, Row } from 'react-bootstrap';
function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  /* OnAdd function checks if product user wants to add is already in cartItems if so increses the quantity of that item. 
  If the product is not in cartItems add it to cartItems */
  
  const onAdd = (product: { id: number; }) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  /* OnRemove function checks if product is in cartItems and if the quantity of item is equal to one
  remove item from cartItems. Else decrease quantity by one */
  
  const onRemove = (product: { id: any; }) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        )
    }
  }

  return (
    <div className="App">
      <Row>
        <Col sm={8} id="main">
          <Header countCartItems={cartItems.length} cartItems={cartItems} />
          <Main onAdd={onAdd} products={products} />
        </Col>
        <Col sm={4} id="basket">
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
