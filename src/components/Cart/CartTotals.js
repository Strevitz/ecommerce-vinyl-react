import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                wyczyść koszyk
              </button>
            </Link>
            <h5>
              <span className="text-title">suma netto :</span>
              <strong>{cartSubTotal} zł</strong>
            </h5>

            <h5>
              <span className="text-title">VAT (23%) :</span>
              <strong>{cartTax} zł</strong>
            </h5>

            <h5>
              <span className="text-title">suma brutto :</span>
              <strong>{cartTotal} zł</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
