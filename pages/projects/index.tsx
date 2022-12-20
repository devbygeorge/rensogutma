import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const data = [
  {
    id: 0,
    title: "Project 1",
    thumbnail:
      "https://www.rensogutma.com/tema/genel/uploads/projeler/kapak/proje-3.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>rensogutma - projects page</title>
        <meta name="description" content="rensogutma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>პროექტები</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>პროექტები</li>
            </ol>
          </div>
        </div>

        {/* projects grid */}
        <section className="projects" id="projects">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 posts-list">
              {data.map((project, i) => (
                <div key={i} className="col-xl-4 col-md-f6">
                  <Link href={"/projects/" + project.id}>
                    <div className="post-item position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        <img
                          className="img-fluid"
                          src={project.thumbnail}
                          alt={project.title}
                        />
                      </div>
                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="posts-pagination">
              <ul className="justify-content-center">
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
              </ul>
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
