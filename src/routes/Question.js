import { useState } from "react";

function Question() {
  let [글제목, 글제목변경] = useState([
    "Nike Air Jordon 재입고 질문",
    "Nike Dunk Low Retro SE 사이즈 질문",
    "제일 많았던 질문",
    "신규고객 가입 관련 이벤트",
  ]);
  let [입력값, 입력값변경] = useState("");
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let today = new Date();
  let formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div className="App">
      <h1>Q & A</h1>
      {글제목.map(function (a, i) {
        return (
          <div className="list my-3" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
            </h4>
            <p>{formattedDate}</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        className="mx-3"
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글 올리기
      </button>

      {modal === true ? (
        <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="box">
      <h4>{props.글제목[props.title]}</h4>
      <p>{props.formattedDate}</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default Question;
