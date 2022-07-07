import React from 'react'
import { Accordion, Col, Figure } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'

export default function Product(props: { filter?: any; input?: any; product?: any; onAdd?: any }) {
  const { product, onAdd, input } = props

  return (
    <Col id="cardcol">
      <Card id="card" style={{ width: '13rem' }}>
        <Card.Img src={product.image ? product.image : "https://via.placeholder.com/286x286.png?text=Image+Not+Found"} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price ? (product.price + "€") : "-"}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button id="addtocart" onClick={() => onAdd(product)}>ADD TO CART</Button>
          </div>
          <Accordion id="readmore">
            <Accordion.Item id="readmore" eventKey="0">
              <Accordion.Header>Read more</Accordion.Header>
              <Accordion.Body>
                <div>{product.description ? product.description : "-"}</div>
                <div>Rating: {product.rating ? product.rating : "-"}</div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Col>
  )
}
