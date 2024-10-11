/* eslint-disable react/prop-types */
import CartPage from "../../components/Cart/CartPage"
import Navbar from "../../components/Navbar"

function Cart({addedToCart,setAddedToCart,addedProducts,setAddedProducts}){
    return(
        <>
            <Navbar/>
            <CartPage addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts} setAddedProducts={setAddedProducts}/>
        </>

    )
}
export default Cart