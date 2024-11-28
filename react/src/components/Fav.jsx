import React from 'react'

function Fav({closeFav, favItems, removeFromFav }) {
    
  return (
    <div className='modal'>
            <div className=''>
                <button onClick={closeFav} className=''>X</button>
                <h2 className=''>favorites</h2>
                {favItems.length > 0 ? (
                    <div>
                        {favItems.map((item) => (
                            <div key={item.id} className=''>
                                <img src={item.image} alt={item.title} className='' />
                                <div className=''>{item.title}</div>
                                <button onClick={() => removeFromFav(item.id)} className=''>Remove</button>
                            </div>
                        ))}
                    </div>
                ) : (<p>Your cart is empty.</p>)}
                
            </div>
    </div>
  )
}

export default Fav