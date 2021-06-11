import React from 'react';

const Cart = (props) => {
   // console.log(props);
    const cart = props.cart;
    //console.log(cart);
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
       // console.log(country);
        totalPopulation = totalPopulation + country.population ;
    }
   // cart.reducer =((sum,country)=>sum+country.population,0);
    return (
        <div>
            <h2>This is Cart {cart.length}  </h2>
            <h4>Total Population: {totalPopulation}</h4>
        </div>
    );
};

export default Cart;