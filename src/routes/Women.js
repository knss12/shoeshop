import axios from "axios";
import data from "../data";
import { useState } from "react";

function Women() {
  return (
    <>
      <div className="main-bg"></div>
      <div className="row">
        <div className="col-md-4">
          <img src={"/shoes16.png"} width="80%" />
          <p className="my-3">Nike Dunk Low Premium</p>
          <p>Life Style / Women</p>
          <p>가격 : 159000</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes17.png"} width="80%" />
          <p className="my-3">Air Jordon 4 Retro</p>
          <p>Life Style / Women</p>
          <p>가격 : 249000</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes18.png"} width="80%" />
          <p className="my-3">Nike Gamma Force</p>
          <p>Life Style / Women</p>
          <p>가격 : 95000</p>
        </div>
      </div>
      <button>더보기</button>
    </>
  );
}

export default Women;
