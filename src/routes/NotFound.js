import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        style={{
          fontSize: "32px",
          lineHeight: "1.6",
          color: "red",
          cursor: "pointer",
        }}
      >
        메인 페이지로 이동
      </div>
    </div>
  );
}

export default NotFound;
