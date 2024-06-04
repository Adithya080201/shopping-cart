import React from "react";
import {NumericFormat} from "react-number-format";
import "./ProductItem.css";

const ProductItem = ({ product, onQuantityChange, onRemoveProduct }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(product.id, newQuantity);
  };

  const handleRemove = () => {
    onRemoveProduct(product.id);
  };

  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>
        Price:{" "}
        <NumericFormat
          value={product.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"INR "}
        />
      </p>
      <input
        type="number"
        min="1"
        value={product.quantity}
        onChange={handleQuantityChange}
      />
      <p>
        Total:{" "}
        <NumericFormat
          value={product.price * product.quantity}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"INR "}
        />
      </p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ProductItem;
