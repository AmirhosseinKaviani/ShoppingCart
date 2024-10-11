/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ProductItemInCart.css'
import { RiDeleteBinLine } from "react-icons/ri";


function ProductItemInCart({id,name,image,price,count,totalPrice,addedProducts,setAddedProducts}){
    const decreaseHandler = () => {
        const updateAddedProducts = [...addedProducts]
        updateAddedProducts.map(product => {
            if(product.id == id){
                product.count -= 1
                product.totalPrice = product.count * product.price
                setAddedProducts(updateAddedProducts)
            }
        })
    }
    const increaseHandler = ()=> {
        const updateAddedProducts = [...addedProducts]
        updateAddedProducts.map(product => {
            if(product.id == id){
                product.count += 1
                product.totalPrice = product.count * product.price
                setAddedProducts(updateAddedProducts)
            }
        })
    }
    const deleteHandler = () => {
        
    }

    return(
        <div className="productItemInCart">
            <div className="cardLeft">
                <img src={image}  />
            </div>

            <div className="cardMiddle">
                {count>1 ? (<button onClick={decreaseHandler}>-</button> 
            ) : ( 
                <button onClick={deleteHandler}><RiDeleteBinLine /></button>

            )}
                <span>{count}</span>
                <button onClick={increaseHandler}>+</button>
            </div>

            <div className="cardRight">
                <h5>{name}</h5>
                <p>price : {totalPrice}</p>
            </div>
        </div>
    )
}
export default ProductItemInCart