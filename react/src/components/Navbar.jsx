import React from 'react'

function Navbar({openCart, cartCount,openFav,logo}) {
  return (
    <div className="head">

                <div>shoppers</div>
                {/* <div>
                    <form>
                        <input></input>
                        <button>Search</button>
                    </form>
                </div> */}
                <div>
                    <button onClick={openCart} >cart :{cartCount}</button>
                    <button onClick={openFav} className='icon'><img src={logo}></img></button>
                </div>
            
    </div>
  )
}

export default Navbar