/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap"
import ProductItem from "./ProductItem"
import productsList from '../../db'
import { useState } from "react"

function ProductList({addedToCart,setAddedToCart,addedProducts,setAddedProducts}){
    const [products, setProducts] =useState(productsList)
    return(
        
        <Container className='py-4'>
            <Row className="gy-4">
                {products.map(product => (
                    <Col key={product.id} sm={6} md={4} lg={3}><ProductItem {...product} addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts} setAddedProducts={setAddedProducts}/></Col>
                ))}
            </Row>
        </Container>

    )
}
export default ProductList