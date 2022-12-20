// import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const Glightbox = require("glightbox");
    Glightbox();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div
          className="row position-relative justify-content-between align-items-center"
          data-aos="fade-up"
        >
          <div className="col-lg-6">
            <div className="section-header">
              <h2 className="left">{"title"}</h2>
            </div>
            <div className="our-story">
              <p>{"article"}</p>
              <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle"></i>

                <a
                  className="glightbox stretched-link"
                  href="https://www.youtube.com/watch?v=sjxh61loQ3k"
                >
                  ნახეთ ვიდეო
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 about-img"></div>
        </div>
      </div>
    </section>
  );
}
