"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const OfferCard = ({}: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    const textEl = textRef.current;
    gsap.fromTo(
      el,
      {
        translateX: -400,
      },
      {
        duration: 4,
        translateX: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top center",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      textEl,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: textEl,
          start: "top 80%",
          end: "top center",
          scrub: 4,
        },
      }
    );
  });

  return (
    <div className="container-fluid">
      <div
        style={{ background: "linear-gradient(to bottom, #fbdf56, #e2c642)" }}
        className="row"
      >
        <div className="col-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            ref={imageRef}
            className="img-fluid"
            src="/images/offerImage.png"
            alt="Offer image"
          />
        </div>

        {/*
         DESCIPTION 
        */}
        <div
          ref={textRef}
          className="col-12 col-md-6 d-flex flex-column text-center justify-content-center gap-4 align-items-center align-items-md-start p-5"
        >
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
