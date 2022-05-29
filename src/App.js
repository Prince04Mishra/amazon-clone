import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<LoginFun />} />
          <Route exact path="/checkout" element={<CheckoutFun />} />
          <Route path="/" element={<HomeFun />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const LoginFun = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Login />
    </React.Fragment>
  );
};

const CheckoutFun = () => {
  return (
    <React.Fragment>
      <Header />
      <Checkout />
    </React.Fragment>
  );
};

const HomeFun = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;

{
  /* <div className="app">
      <Router>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </Router>
    </div> */
}
