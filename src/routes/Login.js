import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="container info">
      <h2>Login</h2>
      <div className="my-3">
        <label htmlFor="id">ID : </label>
        <input type="text" className="mx-3"></input>
      </div>
      <div>
        <label htmlFor="password">PW : </label>
        <input type="password" className="mx-3"></input>
      </div>
      <div className="my-3">
        <input type="checkbox"></input>
        <span className="mx-2">비밀번호 표시</span>
      </div>
      <div className="my-3">
        <button type="submit" onClick={() => {}}>
          Login
        </button>
      </div>
      <h2
        style={{
          fontSize: "20px",
          lineHeight: "1.6",
          color: "skyblue",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/account");
        }}
      >
        Create Account
      </h2>
    </div>
  );
}

export default Login;
