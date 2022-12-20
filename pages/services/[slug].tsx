import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const data = {
  id: 0,
  title: "Service 1",
  image:
    "https://rensogutma.com/tema/genel/uploads/hizmetler/ren-so%C4%9Futma-montaj.jpg",
  article: "Service Description",
};

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>rensogutma - service page</title>
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
                <Link href="/services">სერვისები</Link>
              </li>
              <li>{data.title}</li>
            </ol>
          </div>
        </div>

        {/* service details */}
        <section className="service-details" id="service-details">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="services-list">
                  <Link
                    href="/services/1"
                    className={data.id === 1 ? "active" : ""}
                  >
                    მშენებლობა
                  </Link>
                  <Link
                    href="/services/2"
                    className={data.id === 2 ? "active" : ""}
                  >
                    მომსახურება
                  </Link>
                  <Link
                    href="/services/3"
                    className={data.id === 3 ? "active" : ""}
                  >
                    პროექტირება
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <img
                  className="img-fluid services-img"
                  src={data.image}
                  alt={data.title}
                />
                <h3>{data.title}</h3>
                <p>{data.article}</p>
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
