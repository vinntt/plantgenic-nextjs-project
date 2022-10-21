import React from "react";
import { useState } from "react";
import { client } from "../../lib/client";
import { urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

function ProductDetails({ products, product }) {
  // const { image, name, details, price } = product;

  const [index, setIndex] = useState(0)
  const {qty, increaseQty, decreaseQty, onAdd, setShowCart} = useStateContext()

  const handleBuyNow = () => {
    onAdd(product, qty)
    setShowCart(true)
  }

  return (
    <>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(product.image && product.image[index])} className="product-detail-image" key={product._id}/>
          </div>
          <div className="small-images-container">
            {product.image?.map((item, i) => (
            <img 
            key={i}
            src={urlFor(item)}
            className= {i === index ? "small-image selected-image": "small-image"}
            onMouseEnter={() => setIndex(i)}
            /> 
          ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{product.details}</p>
          <p className="price">€{product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">
                {qty}
              </span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="maylike-products-frame">
          <div className="maylike-products-container marquee">
            {products.map((product) => (
              <Product key={product._id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//getStaticPaths is required for synamic SSG pages, dynamic routes page and pre-render all the paths.

export const getStaticPaths = async () => {
  //means give me all type is product but only the slug is equal to the current slug on the page
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

//pre-render the page at build time when the required data is available before requesting, using props
export const getStaticProps = async ({ params: { slug } }) => {
  //slug is dynamic and get access to it
  const query = ` *[_type == "product" && slug.current == '${slug}' ][0]`;
  const productsquery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsquery);

  //populated into the function
  return {
    props: { products, product },
  };
};

export default ProductDetails;
