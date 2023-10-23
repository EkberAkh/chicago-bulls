import React from "react";
import "./Item.css";

type ItemImg = {
  itemImg: string;
};
const Item: React.FC<ItemImg> = ({ itemImg }) => {
  return (
    <div className="item">
      <div className="item-inner">
        <div className="item-left">
          <img src={itemImg} alt="item-img" />
        </div>
        <div className="item-right"></div>
      </div>
    </div>
  );
};

export default Item;
