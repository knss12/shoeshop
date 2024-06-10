import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Men(props) {
  let [clickcounter, setClickcounter] = useState(0);
  // let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();

  return (
    <>
      <div className="main-bg"></div>
      <div className="row">
        {/* <div className="col-md-4">
          <img src={"/shoes13.png"} width="80%" />
          <p className="my-3">Air Jordon XXXVIII 로우 PF</p>
          <p>BasketBall Shoes / Men</p>
          <p>가격 : 219000</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes14.png"} width="80%" />
          <p className="my-3">TayTerm 2 'Sidewalk Choke' PF</p>
          <p>BasketBall Shoes / Men</p>
          <p>가격 : 149000</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes15.png"} width="80%" />
          <p className="my-3">Nike G.T Jump 2 EP</p>
          <p>BasketBall Shoes / Men</p>
          <p>가격 : 219000</p>
        </div> */}
        {props.shoes.map(function (a, i) {
          return <Card shoes={props.shoes[i]} i={i} key={i}></Card>;
        })}
      </div>
      <button
        onClick={() => {
          //   axios
          //     .get("https://codingapple1.github.io/shop/data2.json")
          //     .then((결과) => {
          //       console.log(결과.data);
          //       let copy = [...props.shoes, ...결과.data];
          //       props.setShoes(copy);
          //     })
          //     .catch(() => {
          //       console.log("실패함");
          //     });

          let newClickCount = clickcounter + 1;
          setClickcounter(newClickCount);
          if (newClickCount === 1) {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((결과) => {
                let copy = [...props.shoes, ...결과.data];
                props.setShoes(copy);
              });
          } else if (newClickCount === 2) {
            axios
              .get("https://codingapple1.github.io/shop/data3.json")
              .then((결과) => {
                let copy = [...props.shoes, ...결과.data];
                props.setShoes(copy);
              });
          } else {
            window.alert("상품이 존재하지 않습니다.");
          }
        }}
      >
        더보기
      </button>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Men;
