"use client";
import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard/ProductCard";
import products from "../../data.json";
import PosterCard from "./PosterCard/PosterCard";
import PosterCardXL from "./PosterCardXL/PosterCardXL";

export type ProductsProps = {
  // types...
};

const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="products__container">
      {products.map((product) => (
        <>
          {product.cardType === "poster" && (
            <PosterCard
              key={product.id}
              name={product.name}
              imgId={product.id}
            />
          )}
          {product.cardType === "posterXL" && (
            <PosterCardXL
              key={product.id}
              name={product.name}
              imgId={product.id}
            />
          )}
          {product.cardType === "product" && (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imgId={product.id}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Products;
