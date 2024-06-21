"use client";
import React, { useState } from "react";
import "./Products.scss";
import ProductCard from "./ProductCard/ProductCard";
import products from "../../data.json";

export type ProductsProps = {
  // types...
};

const Products: React.FC<ProductsProps> = () => {
  const [sortingMode, setSortingMode] = useState<string>("nameAZ");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const sortedProducts = [...products];

  if (sortingMode === "priceHighLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortingMode === "priceLowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortingMode === "nameAZ") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortingMode === "nameZA") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const handleSortProducts = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingMode(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <>
      <div className="products__sort">
        <div className="products__sort--container">
          <p className="products__sort--label">Ordenar</p>
          <select
            className="products__sort--options-container"
            value={sortingMode}
            onChange={handleSortProducts}
          >
            <option
              value="priceHighLow"
              className="products__sort-option products__sort-option-high-low"
            >
              Precio Alto-Bajo
            </option>
            <option
              value="priceLowHigh"
              className="products__sort-option products__sort-option-low-high"
            >
              Precio Bajo-Alto
            </option>
            <option
              value="nameAZ"
              className="products__sort-option products__sort-option-name-az"
            >
              Nombre A-Z
            </option>
            <option
              value="nameZA"
              className="products__sort-option products__sort-option-name-za"
            >
              Nombre Z-A
            </option>
          </select>
        </div>
      </div>

      <div className="products__container">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <div className="products__pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`products__pagination--button ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Products;
