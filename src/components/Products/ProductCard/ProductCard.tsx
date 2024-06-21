"use client";
import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import AddToCartIcon from "../../../icons/AddToCartIcon/AddToCartIcon";

export type ProductCardProps = {
  name: string;
  description: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
}) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    import(`../../../images/products/${name}.webp`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((err) => {
        console.error(`Error loading image: ${name}`, err);
        setImageSrc("");
      });
  }, [name]);

  const formattedPrice = price.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });

  return (
    <div className="card__container">
      <div className="card__content">
        <div className="card__img-container">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="card__img" />
          ) : (
            <div className="card__img-placeholder">Image not available</div>
          )}
        </div>
        <div className="card__product-details">
          <div className="card__add-icon">
            <AddToCartIcon />
          </div>
          <span className="card__product-description">{description}</span>
          <span className="card__product-brand">Tommy Hilfiger</span>
          <span className="card__product-price">{formattedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
