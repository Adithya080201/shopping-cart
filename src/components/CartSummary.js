import React from "react";
import {NumericFormat} from "react-number-format";
import "./CartSummary.css"

const CartSummary = ({ totalAmount, discountedTotal, onDiscountChange }) => {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>
        Total Amount:{" "}
        <NumericFormat
          value={totalAmount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"INR "}
        />
      </p>
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Enter discount (%)"
        onChange={onDiscountChange}
      />
      <p>
        Discounted Total:{" "}
        <NumericFormat
          value={discountedTotal}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"INR "}
        />
      </p>
    </div>
  );
};

export default CartSummary;
