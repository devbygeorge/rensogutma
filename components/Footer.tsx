// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollTop = () => {
    // this changes the scrolling behavior to "smooth"
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-content position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-info">
                <h3>Rensogutma</h3>
                <p>
                  A108 Adam Street <br /> NY 535022, USA
                  <br />
                  <br />
                  <strong>ტელეფონი:</strong> +1 5589 55488 55
                  <br />
                  <strong>იმეილი:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a
                    className="d-flex align-items-center justify-content-center"
                    href="#"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    className="d-flex align-items-center justify-content-center"
                    href="https://www.facebook.com/Ren-So%C4%9Futma-163965507703119/"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    className="d-flex align-items-center justify-content-center"
                    href="#"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    className="d-flex align-items-center justify-content-center"
                    href="#"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 footer-links">
              <h4>ბმულები საიტზე</h4>
              <ul>
                <li>
                  <Link onClick={scrollTop} href="/about">
                    ჩვენს შესახებ
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/product-groups">
                    ჩვენი პროდუქცია
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/services">
                    ჩვენი სერვისები
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/projects">
                    ჩვენი პროექტები
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/blogs">
                    სიახლე
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/gallery">
                    გალერეა
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/contact">
                    კონტაქტი
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 footer-links">
              <h4>ჩვენი სერვისები</h4>
              <ul>
                <li>
                  <Link onClick={scrollTop} href="/services/1">
                    მშენებლობა
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/services/2">
                    მომსახურება
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href="/services/3">
                    პროექტირება
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()}
            <strong>
              <span> rensogutma.ge </span>
            </strong>
            ყველა უფლება დაცულია
          </div>
        </div>
      </div>
    </footer>
  );
}
