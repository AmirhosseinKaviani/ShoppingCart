/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './CartPage.css'
import productsList from "../../db.js"
import ProductItemInCart from './ProductItemInCart.jsx'

function CartPage({addedToCart,setAddedToCart,addedProducts,setAddedProducts}){
    console.log(addedToCart)
    return(
        <div className='cartContainer'>
            { addedToCart > 0 ?
            (
                addedProducts.map((product) => (
                    <ProductItemInCart key={product.id} {...product} addedProducts={addedProducts} setAddedProducts={setAddedProducts}  />
                ))
            
            ) : (
            <p>This shopping cart is empty</p>
            )}
        </div>
    )
}
export default CartPage