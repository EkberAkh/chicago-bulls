import React from 'react';
import './GalleryItems.css';
import Item from './Item';
import item_img from '../../../assets/gallery-item.png';

const GalleryItems = () => {
  return (
   <div className="gallery-items">
    <div className="container">
      <div className="gallery-items-inner">
    <Item itemImg={item_img}/>

      </div>
    </div>
   </div>
  )
}

export default GalleryItems