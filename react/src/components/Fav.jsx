import React from 'react'

function Fav({closeFav, favItems, removeFromFav }) {
    
  return (
    <div className='modal'>
            <div>
                <button onClick={closeFav} className='close'>X</button>
                <h2 className=''>favorites</h2>
                {favItems.length > 0 ? (
                    <div  className=''>
                        {favItems.map((item) => (
                            <div key={item.id} className='mitem'>
                                <img src={item.image} alt={item.title} className='mimg' />
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