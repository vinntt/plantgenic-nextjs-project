import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

function TopBanner({topBanner}) {
  return (
    <div className="hero-banner-container">
      <div>
        <h3>{ topBanner.midText}</h3>
        <h4>{topBanner.discount}</h4>
        <h1>{ topBanner.largeText}</h1>
        <img src={urlFor(topBanner.image)} alt="plant" className="hero-banner-image" />
        <div>
          <Link href={`/product/${topBanner.product}`}>
            <button type="button">{topBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <p>{topBanner.desc} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
 