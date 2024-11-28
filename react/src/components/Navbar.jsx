import React from 'react'

function Navbar({openCart, cartCount,openFav}) {
  return (
    <div className="head">
            <h1>
                <div>name</div>
                <div>
                    <form>
                        <input></input>
                        <button>Search</button>
                    </form>
                </div>
                <div>
                    <button onClick={openCart} >cart :{cartCount}</button>
                    <button onClick={openFav}>fav</button>
                </div>
            </h1>
    </div>
  )
}

export default Navbar