"use client";
import React, { useEffect, useState } from "react";
import "./PosterCard.scss";

export type PosterCardProps = {
  name: string;
  imgId: number;
};

const PosterCard: React.FC<PosterCardProps> = ({ name, imgId }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    import(`../../../images/products/${imgId}.jpeg`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((err) => {
        console.error(`Error loading image: ${name}`, err);
        setImageSrc("");
      });
  }, [imgId]);

  return (
    <div className="poster-card__container">
      <img
        src={imageSrc}
        alt={name}
        className="poster-card__img
          "
      />
    </div>
  );
};

export default PosterCard;
