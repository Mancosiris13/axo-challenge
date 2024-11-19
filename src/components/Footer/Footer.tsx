'use client';
import React from 'react';
import './Footer.scss';

export type FooterProps = {
  // types...
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer__container">
      <p className="footer__text">Candidato: Osiris Macías</p>
    </div>
  );
};

export default Footer;
