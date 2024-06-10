import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, Route, Routes } from "react-router-dom";

import Home from "./routes/Home.js";
import Account from "./routes/Account.js";
import Login from "./routes/Login.js";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import Question from "./routes/Question.js";
import NotFound from "./routes/NotFound.js";
import data from "./data.js";
import Men from "./routes/Men.js";
import Women from "./routes/Women.js";
import { useState } from "react";

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/men");
              }}
            >
              Men
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/women");
              }}
            >
              Women
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/question");
              }}
            >
              Q & A
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes}></Home>}></Route>
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
        <Route path="/question" element={<Question></Question>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/men"
          element={<Men shoes={shoes} setShoes={setShoes}></Men>}
        ></Route>
        <Route path="/women" element={<Women shoes={shoes}></Women>}></Route>
      </Routes>
    </div>
  );
}

export default App;
