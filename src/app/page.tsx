import Image from "next/image";
import styles from "./page.module.css";
import { SectionHero } from "@/components/sectionHero";
import { RectangleCard } from "@/components/rectangleCard";
import { OfferCard } from "@/components/offerCard";
import { YoungRect } from "@/components/youngRect";
import DownloadCard from "@/components/downloadCard";
import SendFeadbackForm from "@/components/sendFeadbackForm";

type Rectangle = {
  pic: string;
  name: string;
  small: string;
};

const rectangels: Rectangle[] = [
  {
    pic: "/images/Rectangle 20.png",
    name: "Hoodies & Sweetshirt",
    small: "Explore Now!",
  },
  {
    pic: "/images/Rectangle 21.png",
    name: "Coats & Parkas",
    small: "Explore Now!",
  },
  {
    pic: "/images/Rectangle 22.png",
    name: "Tees & T-Shirt",
    small: "Explore Now!",
  },
];
export default function Home() {
  return (
    <main className="container-fluid">
      <SectionHero />
      <div className="row d-none d-lg-flex p-4 bg-warning">
        {/* START BRAND SLIDER */}
        <div className="col-2">
          <Image width={160} height={112} src="/images/amazon.png" alt="" />
        </div>
        <div className="col-2">
          <Image width={160} height={112} src="/images/levis.png" alt="" />
        </div>
        <div className="col-2">
          <Image width={160} height={112} src="/images/lacoste.png" alt="" />
        </div>
        <div className="col-2">
          <Image width={160} height={112} src="/images/H&M.png" alt="" />
        </div>
        <div className="col-2">
          <Image width={160} height={112} src="/images/shopify.png" alt="" />
        </div>
        <div className="col-2">
          <Image
            width={160}
            height={112}
            src="/images/obey-seeklogo.svg"
            alt=""
          />
        </div>
        {/* END BRAND SLIDER */}
      </div>

      {/* START NEW ARRIVALS */}
      <div className="row p-4">
        <div className="row mb-4  ms-4 mt-5">
          <span style={{ fontWeight: 900 }} className=" fs-2">
            NEW ARRIVALS
          </span>
        </div>
        <div className="row">
          {rectangels.map((rec) => (
            <div className="col-4 d-flex justify-content-center align-items-center">
              <RectangleCard pic={rec.pic} name={rec.name} small={rec.small} />
            </div>
          ))}
        </div>
      </div>
      {/* END NEW ARRIVALS */}

      <OfferCard />

      <div className="row">
        <div className="row mb-4  ms-4 mt-5">
          <span style={{ fontWeight: 900 }} className=" fs-2">
            Young&apos;s Favourite
          </span>
        </div>
        <div className="row w-75 mx-auto">
          <div className="col-6">
            <YoungRect
              pic="images/youngRect1.png"
              name="Trending on instagram"
              small="Explore Now!"
            />
          </div>
          <div className="col-6">
            <YoungRect
              pic="images/youngRect2.png"
              name="All Under $40"
              small="Explore Now!"
            />
          </div>
        </div>
      </div>

      <DownloadCard />

      {/* START SEND FEADBACK */}
      <div className="container-fluid bg-warning p-5">
        <div className="row d-flex flex-column justify-content-center align-items-center gap-4">
          <div className="row w-75 mx-auto">
            <span
              style={{ fontWeight: 900 }}
              className="fs-1 text-light text-center"
            >
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </span>
          </div>
          <div className="row w-75 mx-auto">
            <span className="fs-5 text-light text-center">
              Type your email down below and be young wild generation
            </span>
          </div>
          <div className={`row mx-auto `}>
            <SendFeadbackForm />
          </div>
        </div>
      </div>
      {/* END SEND FEADBACK */}
    </main>
  );
}
