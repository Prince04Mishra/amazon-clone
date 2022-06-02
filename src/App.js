import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Order from "./Order";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51L5cZFSFEl6y5cZNRFaAeTUYfbzhEKowCopxfQmM4dVfn5Em0lGopMwJ9glJA9zKdlhevvnyIzxE93bGBb9TIBPf0000x8Q2LS"
);

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
          <Route exact path="/orders" element={<OrderFun />} />
          <Route exact path="/login" element={<LoginFun />} />
          <Route exact path="/payment" element={<PaymentFun />} />
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
const OrderFun = () => {
  return (
    <React.Fragment>
      <Header />
      <Order />
    </React.Fragment>
  );
};
const PaymentFun = () => {
  return (
    <React.Fragment>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
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
