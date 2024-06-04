import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";
import "./ProductList.css";

const productList = [
  {
    id: 1,
    name: "Product A",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product B",
    price: 30,
    quantity: 1,
  },
  // Add more products as needed
];

const ProductList = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : productList;
  });
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
  };

  const handleDiscountChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 100) {
      setDiscount(value);
    }
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const discountedTotal = totalAmount - totalAmount * (discount / 100);

  return (
    <div className="product-list">
      <h1>Shopping Cart</h1>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onQuantityChange={handleQuantityChange}
          onRemoveProduct={handleRemoveProduct}
        />
      ))}
      <CartSummary
        totalAmount={totalAmount}
        discountedTotal={discountedTotal}
        onDiscountChange={handleDiscountChange}
      />
    </div>
  );
};

export default ProductList;
