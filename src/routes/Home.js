import { useNavigate } from "react-router-dom";

function Home(props) {
  let navigate = useNavigate();

  let movinginfo0 = () => {
    if (props.shoes && props.shoes[0].rank) {
      console.log(props.shoes[0].rank);
      navigate("/detail/0");
    } else {
      console.log("Shoes rank is not available");
    }
  };

  let movinginfo1 = () => {
    if (props.shoes && props.shoes[1].rank) {
      console.log(props.shoes[1].rank);
      navigate("/detail/1");
    } else {
      console.log("Shoes rank is not available");
    }
  };

  let movinginfo2 = () => {
    if (props.shoes && props.shoes[2].rank) {
      console.log(props.shoes[2].rank);
      navigate("/detail/2");
    } else {
      console.log("Shoes rank is not available");
    }
  };

  return (
    <>
      <div className="main-bg"></div>
      <div className="row">
        <div className="col-md-4">
          <img src={"/shoes0.png"} width="80%" />
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={movinginfo0}
          >
            {props.shoes[0].title}
          </p>
          <p>{props.shoes[0].content}</p>
          <p>가격 : {props.shoes[0].price}</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes1.png"} width="80%" />
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={movinginfo1}
          >
            {props.shoes[1].title}
          </p>
          <p>{props.shoes[1].content}</p>
          <p>가격 : {props.shoes[1].price}</p>
        </div>
        <div className="col-md-4">
          <img src={"/shoes2.png"} width="80%" />
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={movinginfo2}
          >
            {props.shoes[2].title}
          </p>
          <p>{props.shoes[2].content}</p>
          <p>가격 : {props.shoes[2].price}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
