import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg"
          alt="abc"
        />

        <div className="home_row">
          <Product
            id="654723"
            title="the lean startup"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61smwbhzBML._AC_SY200_.jpg"
          />
          <Product
            id="362702"
            title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard"
            price={755.64}
            image="https://m.media-amazon.com/images/I/41CJmPIJ2uL._AC_SY780_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="637246"
            title="WOOSEA Women Sleeveless V Neck Split Evening Cocktail Long Dress"
            price={56.99}
            image="https://m.media-amazon.com/images/I/61iTIlfCryL._AC_UY445_.jpg"
            rating={4}
          />
          <Product
            id="2678206"
            title="OnePlus Buds Pro Wireless Earbuds| with Charging Case |IP55 | Smart Adaptive Noise Cancellation Sound | Matte Black,E503A"
            price={129.99}
            image="https://m.media-amazon.com/images/I/61NHgmxCPWL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="6780272"
            title="LOCALMODE Men's 100% Cotton Long Sleeve Plaid Slim Fit Button Down Dress Shirt"
            price={25}
            image="https://m.media-amazon.com/images/I/71oAJBbLRfL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="5972385"
            title="SplashEZ 3-in-1 Splash Pad, Sprinkler for Kids and Wading Pool for Learning – Children’s Sprinkler Pool, 60’’ Inflatable.."
            price={25}
            image="https://m.media-amazon.com/images/I/714yJ3j0jCL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="637766"
            title="Star Wars The Black Series Inquisitor – Fourth Sister, OBI-Wan Kenobi 6-Inch Collectible Action Figures, Ages 4 and Up"
            price={24}
            image="https://m.media-amazon.com/images/I/61uwyaJJLIL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2679204"
            title="​Hot Wheels Marvel Spider-Man Large Scale Character Car! [Amazon Exclusive]"
            price={20.99}
            image="https://m.media-amazon.com/images/I/71TMGWer2cL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="6780263"
            title="LEGO Marvel Infinity Gauntlet 76191 Collectible Building Kit; Thanos Right Hand Gauntlet Model with Infinity StonesLOCALMODE Men's 100% Cotton Long Sleeve Plaid Slim Fit Button Down Dress Shirt..."
            price={55}
            image="https://m.media-amazon.com/images/I/81Fer8PyyGS._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
