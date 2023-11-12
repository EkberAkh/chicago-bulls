import React from "react";
import "./ProductItem.css";
import blackCart from "../../../assets/shopping-cart-black.png";

import { Rate } from "antd";

interface ProductItemProps {
  productImg: any;
  price: number;
  about: string;
  rating: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  productImg,
  price,
  about,
  rating,
}) => {
  return (
    <div className="product-item">
      <div className="top">
        <img src={blackCart} className="product-cart" />
        <img src={productImg} className="product-element" />
      </div>
      <div className="bottom">
        <h3>${price.toString()}</h3>
        <p>{about}</p>
        <Rate allowHalf defaultValue={rating} disabled />
      </div>
    </div>
  );
};

export default ProductItem;
