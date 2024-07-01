"use client";

import Link from "next/link";

type Props = {};

export const OfferCard = ({}: Props) => {
  return (
    <div className="container-fluid">
      <div
        style={{ background: "linear-gradient(to bottom, #fbdf56, #e2c642)" }}
        className="row"
      >
        <div className="col-6">
          <img
            className="img-fluid"
            src="/images/offerImage.png"
            alt="Offer image"
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center gap-4 align-items-start p-5">
          <div className="row">
            <span style={{ fontWeight: "900" }} className="display-2">
              <span className="bg-light p-1 mb-2">PAYDAY</span>
              <br />
              SALE NOW!
            </span>
          </div>
          <div className="row">
            <span className="fs-5">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </span>
          </div>
          <div className="row">
            <span className="fs-5 fw-bold">1 June - 10 June 2021</span>
            <br />
            <span className="fs-5">*Terms & Conditions apply</span>
          </div>
          <div className="row">
            <Link className="btn btn-dark btn-lg px-4 py-3 fs-4" href="/">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
