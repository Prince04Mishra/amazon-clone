import React, { useState, useEffect } from "react";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { async } from "@firebase/util";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { dblClick } from "@testing-library/user-event/dist/click";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const element = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret whoch allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe ex[ect the total in a currencies submits]
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >> ", clientSecret);

  const handleSubmit = async (event) => {
    //   do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: element.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // payment =payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("./orders");
      });
  };

  const handleChange = (event) => {
    //   Listen for changes in the strips stuff...
    // and display any errors as the customer type their card details.

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        {/* payment section --delevery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>kalapana hostel</p>
            <p>landran, Mohali</p>
          </div>
        </div>

        {/* payment section --review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section --payment method */}
        <div className="payment_section">
          <div className="paymant_title">
            <h3 className="cool">Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stript payment method grap */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
