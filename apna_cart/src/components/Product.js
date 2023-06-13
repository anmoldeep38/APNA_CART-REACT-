import React from "react";

export default function Product(props) {
  const incrementQuantity = () => {
    let newProductList = [...props.productList];
    newProductList[props.index].quantity++;
    props.setProductList(newProductList);
  };

  const decrementQuantity = () => {
    let newProductList = [...props.productList];
    if (newProductList[props.index].quantity > 0) {
      newProductList[props.index].quantity--;
    }
    props.setProductList(newProductList);
  };
  

  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-4">
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick={() => { props.incrementQuantity(props.index);}}>
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
      className="col-2 btn btn-danger"
      onClick={()=>{
        props.removeItem(props.index);
      }}
      >
        Remove
      </button>
    </div>
  );
}
