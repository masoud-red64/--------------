import React from "react";

import "./SelectedProducts.css";
import Product from "../Product/Product";

export default function SelectedProducts({ title, icon, allSelectedProducts }) {
  return (
    <section className="selected-products mt-5">
      <p className="selected-products__title mb-5">
        {icon && (
          <svg
            className="selected-products__title-icon"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
            id="discount-coupon"
          >
            <path
              fill="#231f20"
              d="M57.3,26.7c1.1-0.5,1.7-1.6,1.7-2.7V16c0-1.7-1.3-3-3-3H8c-1.7,0-3,1.3-3,3v7.8C5,25,5.7,26,6.8,26.5
              c2.1,1,3.5,3.1,3.5,5.5S9,36.5,6.8,37.5C5.7,38,5,39,5,40.2V48c0,1.7,1.3,3,3,3h48c1.7,0,3-1.3,3-3v-7.9c0-1.1-0.7-2.2-1.7-2.7
              c-2-1-3.3-3.1-3.3-5.3S55.3,27.7,57.3,26.7z M52,32c0,3,1.7,5.8,4.4,7.1c0.4,0.2,0.6,0.6,0.6,0.9V48c0,0.6-0.4,1-1,1H8
              c-0.6,0-1-0.4-1-1v-7.8c0-0.4,0.3-0.8,0.7-0.9c2.9-1.3,4.7-4.2,4.7-7.3s-1.8-6-4.7-7.3C7.3,24.5,7,24.2,7,23.8V16c0-0.6,0.4-1,1-1
              h48c0.6,0,1,0.4,1,1v7.9c0,0.4-0.2,0.7-0.6,0.9C53.7,26.2,52,29,52,32z"
            ></path>
            <path
              fill="#231f20"
              d="M39 34c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5S41.8 34 39 34zM39 42c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S40.7 42 39 42zM25 30c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5S22.2 30 25 30zM25 22c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S23.3 22 25 22zM43 23.9c0-.8-.3-1.5-.9-2.1-1.1-1.1-3-1.1-4.1 0L21.9 38c-.5.5-.9 1.3-.9 2.1 0 .8.3 1.5.9 2.1.6.6 1.3.9 2.1.9.7 0 1.5-.3 2.1-.9L42.1 26C42.7 25.4 43 24.7 43 23.9zM40.7 24.5C40.7 24.5 40.7 24.5 40.7 24.5L24.5 40.7c-.4.4-.9.4-1.3 0-.2-.2-.3-.4-.3-.6s.1-.5.3-.6l16.2-16.2c.2-.2.4-.3.6-.3s.5.1.6.3c.2.2.3.4.3.6S40.9 24.4 40.7 24.5z"
            ></path>
          </svg>
        )}
        {title}
      </p>
      <div
        className="selected-products__wrapper"
        id="selected-products-container"
      >
        {allSelectedProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
