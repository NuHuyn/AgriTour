import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context-store/StoreContext';
const Cart = () => {

    const {cartItems, food_list, removeFromCart} = useContext(StoreContext);
 
  return (
    <div className='cart'>
      <div className='cart-items'>
         <div className="cart-items-title">
            <p>Tour</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Canceled</p>
         </div>
         <hr />
         {Array.isArray(food_list) && food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
                 return (
                  <div key={item._id || index} className='cart-items-title cart-items-item'>
                     <p>{item.tour || '-'}</p>
                     <p>{item.title || '-'}</p>
                     <p>{item.price != null ? item.price : '-'}</p>
                     <p>{cartItems[item._id]}</p>
                     <p>{item.price != null ? (item.price * cartItems[item._id]).toFixed(2) : '-'}</p>
                     <p>
                       <button onClick={() => removeFromCart(item._id)}>Remove</button>
                     </p>
                  </div>
               )
            }
            return null;
         })}
      </div>
    </div>
  )
}

export default Cart
