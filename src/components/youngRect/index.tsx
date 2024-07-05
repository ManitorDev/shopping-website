"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  pic: string;
  name: string;
  small: string;
};
export const YoungRect = ({ pic, name, small }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current as HTMLDivElement;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        translateY: "200px",
      },
      {
        y: "0",
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 50%",
          toggleClass: "active",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="card" style={{ width: "100%" }}>
      <img src={pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">{small}</p>
      </div>
    </div>
  );
};
