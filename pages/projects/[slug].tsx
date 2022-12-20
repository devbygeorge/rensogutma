import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import { useEffect } from "react";
import { initIsotope } from "@/lib/isotope";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const data = {
  id: 0,
  title: "Project 1",
  thumbnail:
    "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
  date: "01-01-2012",
  desc: "Project Description",
  images: [
    "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
    "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
    "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
    "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
  ],
};

export default function ProjectPage() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <>
      <Head>
        <title>rensogutma - project page</title>
        <meta name="description" content="rensogutma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>{data.title}</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>
                <Link href="/projects">პროექტები</Link>
              </li>
              <li>{data.title}</li>
            </ol>
          </div>
        </div>

        {/* project details */}
        <section className="projects" id="projects">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">დასრულებული პროექტები</h3>
                    <div className="mt-3">
                      <div className="post-item mt-3">
                        <img src={data.thumbnail} alt={data.title} />
                        <div>
                          <h4>
                            <Link href={"/projects/" + data.id}>
                              {data.title}
                            </Link>
                          </h4>
                          <time dateTime="2020-01-01">{data.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <article className="project-details">
                  <div className="post-img">
                    <img
                      className="img-fluid"
                      src={data.thumbnail}
                      alt={data.title}
                    />
                  </div>
                  <h2 className="title">{data.title}</h2>
                  <p className="paragraph">{data.desc}</p>
                  <div className="content">
                    {/* grid isotope start */}
                    <div className="grid-isotope row gy-4">
                      {/* grid item start */}
                      {data.images.map((image, index) => (
                        <div
                          key={index}
                          className="col-lg-4 col-md-6 grid-item"
                        >
                          <div className="grid-content h-100">
                            <img
                              className="img-fluid"
                              src={image}
                              alt="Image from gallery"
                            />
                            <div className="grid-info">
                              <a
                                className="glightbox preview-link"
                                href={image}
                                title=""
                              >
                                <i className="bi bi-zoom-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* grid item end */}
                    </div>
                    {/* grid isotope end */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* cta section */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}
