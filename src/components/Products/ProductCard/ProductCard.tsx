"use client";
import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import AddToCartIcon from "../../../icons/AddToCartIcon/AddToCartIcon";

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
  const [imageSrc, setImageSrc] = useState<string>("");

  const formattedPrice = price.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    import(`../../../images/products/${imgId}.webp`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((err) => {
        console.error(`Error loading image: ${name}`, err);
        setImageSrc("");
      });
  }, [imgId]);

  return (
    <div className="card__container">
      <div className="card__content">
        <div className="card__img-container">
          <img src={imageSrc} alt={name} className="card__img" />
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
