import React, { useEffect, useState } from "react";
import {
  enToPersianNumber,
  formatNumberWithSeparators,
} from "../../../func/utils";

export default function CartProduct({
  title,
  wonder,
  time,
  price,
  off,
  img,
  setSumPrice,
  setSumDiscount,
  setTotalPrice,
  sumDiscount,
}) {
  const [countProduct, setCountProduct] = useState(1);

  useEffect(() => {
    setSumPrice((prev) => (prev += price));
    setSumDiscount((prev) => (prev += (price * off) / 100));
    setTotalPrice((prev) => (prev += price - (price * off) / 100));
  }, []);
  return (
    <>
      <div className="col-3 col-sm-2">
        <div className="cart-content__right">
          <a href="#">
            <img
              src={`/img/${img}`}
              alt="product"
              className="cart-content__right-product-img"
            />
          </a>
          {wonder ? (
            <div className="cart-content__right-off">
              <img
                src="./images/cart-page/IncredibleOffer.svg"
                alt="IncredibleOffer"
                className="cart-content__right-off-amazing-img"
              />
              <p className="cart-content__right-off-time">
                {enToPersianNumber(time)}
              </p>
            </div>
          ) : null}
          <div className="cart-content__right-add-minus">
            <button
              className="cart-content__right-add-btn"
              onClick={() => {
                setCountProduct((prev) => (prev += 1));
                setSumPrice((prev) => (prev += price));
                setSumDiscount((prev) => (prev += (price * off) / 100));
                setTotalPrice((prev) => (prev += price - (price * off) / 100));
              }}
            >
              +
            </button>
            <span className="cart-content__right-add-minus-count">
              {enToPersianNumber(countProduct)}
            </span>
            <button className="cart-content__right-minus">
              {countProduct > 1 && (
                <span
                  className="cart-content__right-minus-btn"
                  onClick={() => {
                    setCountProduct((prev) => (prev -= 1));
                    setSumPrice((prev) => (prev -= price));
                    setSumDiscount((prev) => (prev -= (price * off) / 100));
                    setTotalPrice(
                      (prev) => (prev -= price - (price * off) / 100)
                    );
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 11v2H4v-2h16z"></path>
                  </svg>
                </span>
              )}
              {countProduct === 1 && (
                <span className="cart-content__right-delete-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="col-9 col-sm-10">
        <div className="cart-content__left">
          <p className="cart-content__left-title">{title}</p>
          <p className="cart-content__left-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#9e9fb1"
            >
              <path
                fillRule="evenodd"
                d="M4.725 4.038l7-2a1 1 0 01.55 0l7 2A1 1 0 0120 5v7.938a8 8 0 01-4.03 6.946l-3.474 1.984a1 1 0 01-.992 0L8.03 19.884A8 8 0 014 12.938V5a1 1 0 01.725-.962zM6 5.754v7.184a6 6 0 003.023 5.21l2.977 1.7 2.977-1.7A6 6 0 0018 12.937V5.754L12 4.04 6 5.754zm9 2.539l-3.793 3.793-1.793-1.793L8 11.707l2.5 2.5a1 1 0 001.414 0l4.5-4.5L15 8.293z"
                clipRule="evenodd"
              ></path>
            </svg>
            گارانتی اصالت و سلامت فیزیکی کالا
          </p>
          <p className="cart-content__left-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#9e9fb1"
            >
              <path
                fillRule="evenodd"
                d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                clipRule="evenodd"
              ></path>
            </svg>
            دیجی‌کالا
          </p>
          <p className="cart-content__left-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#19bfd3"
            >
              <path
                fillRule="evenodd"
                d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            موجود در انبار دیجی‌کالا
          </p>
          <ul className="cart-content__left-list">
            <li className="cart-content__left-item">
              <div className="cart-content__left-item-circle"></div>
              <p className="cart-content__left-item-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#e6123d"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                ارسال دیجی‌کالا
              </p>
            </li>
            <li className="cart-content__left-item">
              <div className="cart-content__left-item-circle"></div>
              <p className="cart-content__left-item-text">
                <svg
                  id="deliveryFastFmcg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#6bb927"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.17 19a3.001 3.001 0 005.66 0H21a1 1 0 001-1v-3h1v-2h-5v2h2v2h-1.17a3.001 3.001 0 00-5.66 0H10V6h12V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H4.556C2.033 6 0 8.096 0 10.667V18a1 1 0 001 1h1.17a3.001 3.001 0 005.66 0h5.34zM8 17V8H4.556C3.15 8 2 9.187 2 10.667V12h5v2H2v3h.17a3.001 3.001 0 015.66 0H8zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2zm0-12v2h8V7h-8zm1 5v-2h5v2h-5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                ارسال سریع سوپرمارکتی دیجی‌کالا
              </p>
            </li>
          </ul>

          <div className="cart-content__left-price">
            <p className="cart-content__left-discount">
              {off ? (
                <span>
                  {formatNumberWithSeparators(
                    enToPersianNumber(((price * off) / 100) * countProduct)
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    fill="#ef394e"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  تخفیف
                </span>
              ) : null}
            </p>
            <p className="cart-content__left-real">
              {formatNumberWithSeparators(
                enToPersianNumber((price - (price * off) / 100) * countProduct)
              )}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                <path
                  fillRule="evenodd"
                  d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
          <div className="cart-content__next-buy">
            <p className="cart-content__next-buy-text">
              انتقال به خرید بعدی
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#19bfd3"
                style={{ width: "2rem", height: "2rem" }}
              >
                <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
