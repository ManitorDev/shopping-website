"use client";

import Link from "next/link";

type Props = {};
export const SectionHero = ({}: Props) => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-12 col-md-6 d-flex flex-column gap-4 justify-content-center align-items-center">
          <div className="row">
            <span
              style={{
                width:
                  innerHeight > innerWidth
                    ? "100% !important"
                    : "25% !important",
              }}
              className="display-3 text-center fw-bold mx-auto animate__animated animate__backInLeft"
            >
              LET&apos;S EXPLORE{" "}
              <span className="bg-warning p-2 pe-5">UNIQUE</span> CLOTHES.
            </span>
          </div>
          <div className="row animate__animated animate__fadeIn">
            <span className="fs-4">
              Live for Influential and Innovative fashion!
            </span>
          </div>
          <div className="row">
            <Link
              className="btn btn-dark btn-lg animate__animated animate__fadeIn"
              href="/"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="col-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            className="img-fluid animate__animated animate__backInRight"
            src="/images/woman-section.png"
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
};
