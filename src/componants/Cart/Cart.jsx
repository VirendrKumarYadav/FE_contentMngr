import React from 'react'
import Header from '../header/Header'

const Cart = () => {
    return (
        <div>
             <Header/>
             <nav className='nav'>
                <span>
                    <button>{"<-"} My Cart</button>
                </span>
             </nav>
        <div className='my-cart'>
           
            <div className='left-cart'>
              <label><h4>Items</h4></label>
            </div>
            <div className='right-cart'>

            </div>
            </div>

        </div>
    )
}

export default Cart