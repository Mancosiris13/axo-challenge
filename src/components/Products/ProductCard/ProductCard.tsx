"use client";
import React from "react";
import "./ProductCard.scss";
import AddToCartIcon from "../../../icons/AddToCartIcon/AddToCartIcon";
const images = Object.values(
  import.meta.glob("../../../images/products/*", { eager: true, as: "url" })
);

export type ProductCardProps = {
  name: string;
  imgId: number;
  description: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imgId,
  description,
  price,
}) => {
  const formattedPrice = price.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });

  return (
    <div className="card__container">
      <div className="card__content">
        <div className="card__img-container">
          <img src={images[imgId]} alt={name} className="card__img" />
        </div>
        <div className="card__product-details">
          <span className="card__product-description">{description}</span>

          <div className="card__product-grid">
            <div className="card__product-grid--left">
              <span className="card__product-brand">Tommy Hilfiger</span>
              <span className="card__product-price">{formattedPrice}</span>
            </div>

            <div className="card__add-icon">
              <AddToCartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
