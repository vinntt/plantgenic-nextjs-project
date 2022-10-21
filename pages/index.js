import React from "react";
import { Product, FooterBanner, TopBanner } from "../components";
import { client } from "../lib/client";

//fetch data from either API or CMS
export const getServerSideProps = async () => {
  //get all the products from the dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

 //populated into the function
  return {
    props: {products, bannerData}
  }
}

function Home({products, bannerData}) {

  return (
    <>
      <TopBanner topBanner={bannerData.length && bannerData[0]}/>
      <div className="products-heading">
        <h2>Best Selling Plants</h2>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
}

export default Home;
