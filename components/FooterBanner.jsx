import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Product from "./Product";

function FooterBanner({ footerBanner }) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        </div>
        <div className="right">
          <h3>{footerBanner.midText}</h3>
          <h4>{footerBanner.discount}</h4>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(footerBanner.image)} alt={footerBanner.name} className="footer-banner-image" />
      </div>
    </div>
  );
}

export default FooterBanner;
