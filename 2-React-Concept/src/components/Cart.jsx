import React from "react";
const items = ["Iphone", "Samsung", "Orange",'Wine'];
function Cart() {
    return <div>
        <h1>Cart</h1>
        {items.length>0 && <h2>You have {items.length} in your Cart</h2> }
        <ul>
            <h4>Products</h4>
            {items.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>;
}

export default Cart;
