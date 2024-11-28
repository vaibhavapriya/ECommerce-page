import React from 'react'
import './Modal.css'

function Cart({ closeCart, cartItems, removeFromCart }) {
  return (
    <div className='modal'>
            <div>
                <button onClick={closeCart} className=''>X</button>
                <h2 className=''>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <div  className=''>
                        {cartItems.map((item) => (
                            <div key={item.id} className='mitem'>
                                <img src={item.image} alt={item.title} className='mimg' />
                                <div className=''>{item.title}</div>
                                <button onClick={() => removeFromCart(item.id)} className=''>Remove</button>
                            </div>
                        ))}
                    </div>
                ) : (<p>Your cart is empty.</p>)}
                
            </div>
    </div>
  )
}

export default Cart