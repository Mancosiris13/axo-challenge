"use client";
import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard/ProductCard";
import products from "../../data.json";

export type ProductsProps = {
  // types...
};

const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="products__container">
      {products.map((product) => {
        return (
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
