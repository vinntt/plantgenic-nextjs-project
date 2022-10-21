import React, { useEffect } from "react";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { canvasConfetti } from "../lib/utils";

function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    canvasConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2> Thank you for your order!</h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:infor@plantgenic.com">
            infor@plantgenic.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
