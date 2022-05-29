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
            title="
OnePlus Buds Pro Wireless Earbuds| with Charging Case |IP55 | Smart Adaptive Noise Cancellation Sound | Matte Black,E503A"
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
            id="5552385"
            title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6 Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard"
            price={1252.04}
            image="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
