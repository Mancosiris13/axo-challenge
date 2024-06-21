"use client";
import React from "react";

export type AddToCartIconProps = {
  // types...
};

const AddToCartIcon: React.FC<AddToCartIconProps> = () => {
  return (
    <svg
      width={60}
      height={59}
      viewBox="0 0 60 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_204_9)">
        <rect x={10} y={9} width={40} height={39} rx="19.5" fill="#1A1A1A" />
        <path
          d="M36.332 29.7764L24.068 29.7764L24.068 27.4244L36.332 27.4244L36.332 29.7764ZM31.32 34.8724L29.108 34.8724L29.108 22.3284L31.32 22.3284L31.32 34.8724Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_204_9"
          x={0}
          y={0}
          width={60}
          height={59}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_204_9"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_204_9"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AddToCartIcon;
