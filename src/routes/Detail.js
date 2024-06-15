import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { id } = useParams();
  let [탭, 탭변경] = useState(0);
  let [modal, setModal] = useState(false);

  let openModal = () => {
    setModal(true);
  };

  let closeModal = () => {
    setModal(false);
  };

  let dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="my-3">{props.shoes[id].title}</h1>
      <div className="row my-3">
        <div className="col-md-6 ">
          <img src={"/shoes" + [id] + ".png"} width="80%" height="80%"></img>
        </div>
        <div className="col-md-6 my-3">
          <p>상품명 : {props.shoes[id].title}</p>
          <p>상품 설명 : {props.shoes[id].content}</p>
          <p>가격 : {props.shoes[id].price}</p>
          <button className="mx-3" onClick={openModal}>
            상세정보
          </button>
          <button
            className="mx-3"
            onClick={() => {
              dispatch(
                addItem({ id: 1, name: props.shoes[id].title, count: 1 })
              );
            }}
          >
            구매하기
          </button>
          {modal && <Box closeModal={closeModal}></Box>}
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            할인중
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            인기상승
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            이벤트Ing!
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent
        openModal={openModal}
        closeModal={closeModal}
        탭={탭}
        탭변경={탭변경}
      />
    </div>
  );
}

function TabContent(props) {
  if (props.탭 === 0) {
    return (
      <div className="row my-3">
        <div className="col-md-6">
          <img src={"/shoes6.png"} width="80%" />
          <h1 className="my-3">40% 할인중!</h1>
          <p>상품명 : Nike G.T CUT 3 EP Jewel Royde</p>
          <p>정가 : 229.000원</p>
          <p>지금 구입시 : 133.000원</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>

        <div className="col-md-6">
          <img src={"/shoes7.png"} width="80%" />
          <h1 className="my-3">60% 할인중!</h1>
          <p>상품명 : Sabrina 1 'Magnetic' EP</p>
          <p>정가 : 139.000원</p>
          <p>지금 구입시 : 52.000원</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
      </div>
    );
  }
  if (props.탭 === 1) {
    return (
      <div className="row my-3">
        <div className="col-md-4">
          <h1>1위</h1>
          <img src={"/shoes8.png"} width="80%" />
          <p className="my-3">상품명 : Nike G.T Cut Academy</p>
          <p>가격 : 109.000</p>
          <p>오늘 조회수 : 35</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
        <div className="col-md-4">
          <h1>2위</h1>
          <img src={"/shoes9.png"} width="80%" />
          <p className="my-3">상품명 : Nike Structure 25 Premium</p>
          <p>가격 : 159.000원</p>
          <p>오늘 조회수 : 23</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
        <div className="col-md-4">
          <h1>3위</h1>
          <img src={"/shoes10.png"} width="80%" />
          <p className="my-3">상품명 : Nike Invincible 3</p>
          <p>가격 : 209.000원</p>
          <p>오늘 조회수 : 17</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
      </div>
    );
  }
  if (props.탭 === 2) {
    return (
      <div className="row my-3">
        <div className="col-md-6">
          <img src={"/shoes11.png"} width="80%" />
          <h1 className="my-3">17시간 남음!!</h1>
          <p>상품명 : Air Jordon 9 G NRG</p>
          <p>가격 : 249.000원</p>
          <p>오늘 하루만 : 189.000원</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
        <div className="col-md-6">
          <img src={"/shoes12.png"} width="80%" />
          <h1 className="my-3">1일 남음!!</h1>
          <p>상품명 : Air Jordon | High G</p>
          <p>가격 : 249.000원</p>
          <p>오늘 하루만 : 189.000원</p>
          <button className="mx-3" onClick={props.openModal}>
            상세정보
          </button>
          <button>구매하기</button>
        </div>
      </div>
    );
  }
}

function Box(props) {
  return (
    <div className="box">
      <div className="my-3">
        <span>개수 : </span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="my-3">
        <span>치수 : </span>
        <select>
          <option>235</option>
          <option>240</option>
          <option>245</option>
          <option>250</option>
          <option>260</option>
          <option>270</option>
          <option>275</option>
        </select>
      </div>
      <div className="my-3">
        <span>쿠폰 : </span>
        <select>
          <option>신규가입 30% 할인</option>
          <option>15% 할인 쿠폰</option>
          <option>20% 할인 쿠폰</option>
          <option>브론즈 멤버 1000원 할인</option>
          <option>실버 멤버 3000원 할인</option>
        </select>
      </div>
      <div className="my-3">
        <button>구매 확정</button>
        <button className="mx-3" onClick={props.closeModal}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Detail;
