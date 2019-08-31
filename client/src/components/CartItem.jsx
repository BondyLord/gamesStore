import React from "react";
import "../css/cart.css";

export default function CartItem({item, value}) {
    const {_id, name, image, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={require("./" + image)} style={{width: '5rem', height: "5rem"}}
                     className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(_id)}>+</span>
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="cart-icon" onClick={() => removeItem(_id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <strong>Item total : {total}$</strong>
            </div>


        </div>
    );
}