"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {};

export const Header = ({}: Props) => {
  const [scroll, setScroll] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement;

    if (scroll > container?.clientHeight) container.classList.add("bg-light");
    else container.classList.remove("bg-light");
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="container-fluid fixed-top">
      <div className="row p-4">
        <div className="col-3">
          <div className="d-flex justify-content-start align-items-center gap-2">
            <img src="/images/vector.png" alt="logo" className="img-fluid" />
            <span className="fw-bolder fs-4 ">FASHION</span>
          </div>
        </div>
        <div className="col-5">
          <nav className="d-flex justify-content-around align-items-center ">
            <Link className="text-decoration-none text-dark" href="/">
              CATALOGUE
            </Link>
            <Link className="text-decoration-none text-dark" href="/">
              FASHION
            </Link>
            <Link className="text-decoration-none text-dark" href="/">
              FAVOURITE
            </Link>
          </nav>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <Link className="btn" href="/">
                LIFESTYLE
              </Link>
            </div>
            <div className="col-6">
              <Link href="/" className="btn btn-dark">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
