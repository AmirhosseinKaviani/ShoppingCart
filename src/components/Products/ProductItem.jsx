/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import productsList from "../../db";
import './ProductItem.css'
function ProductItem({id,name,price,image,addedToCart,setAddedToCart,addedProducts,setAddedProducts}){
    const addToCartHandler =()=>{

        if(isProductExistInCart()) {
            setAddedToCart(addedToCart+1)
            const updatedAddedProducts =[...addedProducts]

            updatedAddedProducts.map(product =>{
                if(product.id == id) {
                    product.count +=1
                    product.totalPrice =product.count * product.price
                }
                setAddedProducts(updatedAddedProducts)
                return
        })}
        else{
            setAddedToCart(addedToCart+1)
            const product = productsList.find(product => product.id==id)
            product.count = 1
            product.totalPrice =product.count * product.price
            setAddedProducts(prevState =>[...prevState,product])
        }
    }
    const isProductExistInCart = ()=>{
        return addedProducts.some(product => product.id==id)
    }
    return(
        <div className='productCart'>
            <div className="productImage">
                <img className='img-fluid' src={image} />
            </div>
            <div className="productBody">
                <p>{name}</p>
                <p className='price'>price: {price}</p>
                <button className='btn btn-primary'onClick={addToCartHandler}>add to cart</button>
            </div>
        </div>

    )
}
export default  ProductItem