import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid p-5 bg-dark text-bg-dark">
      <div className="row">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start gap-4">
          <span style={{ fontWeight: 900 }} className="fs-3">
            FASHION
          </span>

          <span className="text-light fs-5">
            Complete your style with awesome clothes from us.
          </span>
          {/* <span className="text-white">
            &copy; 2022 Fashion Shop. All rights reserved.
          </span> */}
          <div className="row">
            <div className="col-3">
              <Link className="btn btn-warning" href="/">
                <FaFacebookF />
              </Link>
            </div>
            <div className="col-3">
              <Link className="btn btn-warning" href="/">
                <FaInstagram />
              </Link>
            </div>
            <div className="col-3">
              <Link className="btn btn-warning" href="/">
                <FaTwitter />
              </Link>
            </div>
            <div className="col-3">
              <Link className="btn btn-warning" href="/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 d-none d-md-block col-md-7 mt-5">
          <div className="row">
            <div className="col-4">
              <h5 className="text-light">About Us</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="text-light ">Help & Support</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="text-light">Customer Service</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-decoration-none" href="/">
                    Returns & Exchanges
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
