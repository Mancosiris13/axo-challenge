"use client";
import React, { useEffect, useState } from "react";
import "./PosterCardXL.scss";

export type PosterCardXLProps = {
  name: string;
  imgId: number;
};

const PosterCardXL: React.FC<PosterCardXLProps> = ({ name, imgId }) => {
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
    <div className="poster-card-xl__container">
      <img
        src={imageSrc}
        alt={name}
        className="poster-card-xl__img
          "
      />
    </div>
  );
};

export default PosterCardXL;
