import React from "react";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import "./Collection.css";

const Collection = () => {
  return (
    <div>
      <div className="collection-header">
        <p>SHOP BY COLLECTIONS</p>
      </div>

      <div className="collection-items">
        <div className="collection-item">
          <div className="name">
            <p>SOFAS</p>
          </div>
          <div className="image">
            <img
              src="src/assets/category/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
              alt="Sofa"
            ></img>
          </div>
          <HiOutlineArrowDownRight className="arrow-icon" />
        </div>

        <div className="collection-item">
          <div className="name">
            <p>LOUNGE CHAIRS</p>
          </div>
          <div className="image">
            <img
              src="src/assets/category/mitch-moondae-zXFtsdi9dIc-unsplash.jpg"
              alt="Chair"
            ></img>
          </div>
          <HiOutlineArrowDownRight className="arrow-icon" />
        </div>

        <div className="collection-item">
          <div className="name">
            <p>CHAIRS</p>
          </div>
          <div className="image">
            <img
              src="src/assets/category/curology-6CJg-fOTYs4-unsplash.jpg"
              alt="todo"
            ></img>
          </div>
          <HiOutlineArrowDownRight className="arrow-icon" />
        </div>

        <div className="collection-item">
          <div className="name">
            <p>TABLES</p>
          </div>
          <div className="image">
            <img
              src="src/assets/category/ryan-yao-BDvCewlnbD8-unsplash.jpg"
              alt=""
            ></img>
          </div>
          <HiOutlineArrowDownRight className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
