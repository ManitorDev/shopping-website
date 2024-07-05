"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DownloadCard = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    const text = textRef.current;

    // gsap for image element
    gsap.fromTo(
      img,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: img,
          scrub: 3,
          start: "top 60%",
          end: "top center",
        },
      }
    );

    //gsap for text element
    gsap.fromTo(
      text,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: text,
          scrub: 3,
          start: "top 60%",
          end: "top center",
        },
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          ref={textRef}
          className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-4 p-5"
        >
          <div className="row w-75">
            <span style={{ fontWeight: 900 }} className="fs-2">
              DOWNLOAD APP & GET THE VOUCHER!
            </span>
          </div>

          <div className="row">
            <span className="fs-5">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </span>
          </div>
          <div className="row">
            <div className="col-6">
              <Link className="w-100" href="/">
                <img
                  className="img-fluid"
                  src="/images/appStoreDownload.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-6 ">
              <Link className="w-100" href="/">
                <img
                  className="img-fluid"
                  src="/images/googlePlayDownload.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 d-none d-md-block h-75 d-flex justify-content-center align-items-center gap-4">
          <img
            ref={imageRef}
            className="img-fluid h-75"
            src="/images/Mobile app.png"
            alt="App"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
