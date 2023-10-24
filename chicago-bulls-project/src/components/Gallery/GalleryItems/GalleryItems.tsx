import React from "react";
import "./GalleryItems.css";
import Item from "./Item";
import item_img from "../../../assets/gallery-item.png";
import item_img1 from "../../../assets/gallery-item(1).png";
import item_img2 from "../../../assets/gallery-item(2).png";
import item_img3 from "../../../assets/gallery-item(3).png";

const GalleryItems = () => {
  const item_title = "Bulls All Summer: Titan Walls";
  const item_title1 = "Bulls Fest: Day 1";
  const item_title2 = "Bulls Fest: Day 2";
  const item_title3 = "Bulls Day at White Sox";
  const item_content =
    "The Bulls celebrated the 5th anniversary of Titan Walls with a custom basketball painting station.";
    const item_content1 =
    "The best photos from Day 1 at Bulls Fest!";
    const item_content2 =
    "See the best pictures from Day 2 of Bulls Fest 2023!";
    const item_content3 =
    "Bulls Day at White Sox was a success with our new Bulls rookies, Julian Phillips and Adama Sanogo, throwing out the first pitch, basketball obstacle courses in the Kids Zone.";
  return (
    <div className="gallery-items">
      <div className="container">
        <div className="gallery-items-inner">
          <Item
            itemImg={item_img}
            item_title={item_title}
            item_content={item_content}
            row_reverse = {false}
          />
          <Item
            itemImg={item_img1}
            item_title={item_title1}
            item_content={item_content1}
            row_reverse = {true}
          />
          <Item
            itemImg={item_img2}
            item_title={item_title2}
            item_content={item_content2}
            row_reverse = {false}
          />
          <Item
            itemImg={item_img3}
            item_title={item_title3}
            item_content={item_content3}
            row_reverse = {true}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryItems;
