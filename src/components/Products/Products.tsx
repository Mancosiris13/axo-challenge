"use client";
import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard/ProductCard";
import products from "../../data.json";
import PosterCard from "./PosterCard/PosterCard";

export type ProductsProps = {
  // types...
};

const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="products__container">
      {products.map((product) => (
        <>
          {product.cardType.includes("poster") && (
            <PosterCard
              key={product.id}
              name={product.name}
              imgId={product.id}
              cardType={product.cardType}
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
