import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import Cta from "@/components/Cta";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const data = [];

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>rensogutma - partners page</title>
        <meta name="description" content="rensogutma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>პარტნიორები</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>პარტნიორები</li>
            </ol>
          </div>
        </div>

        {/* partners */}
        <section className="partners py-5" id="partners">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/acc04b084c3d771b47396fcefa59826743f0b85a-471x471.jpg?w=2000&fit=max&auto=format"
                    alt="adiguzel"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/c1575f00c9c15209207e85170b013dde424f995e-425x250.png?w=2000&fit=max&auto=format"
                    alt="baba"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/dabea5d876c9028f2385023f851b57c3947ba8c6-512x250.png?w=2000&fit=max&auto=format"
                    alt="bahsis"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/74d2b5cebfe1cb28246542f122cdfe012a4bf9a0-908x338.png?w=2000&fit=max&auto=format"
                    alt="besiktas"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/acc04b084c3d771b47396fcefa59826743f0b85a-471x471.jpg?w=2000&fit=max&auto=format"
                    alt="adiguzel"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/c1575f00c9c15209207e85170b013dde424f995e-425x250.png?w=2000&fit=max&auto=format"
                    alt="baba"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/dabea5d876c9028f2385023f851b57c3947ba8c6-512x250.png?w=2000&fit=max&auto=format"
                    alt="bahsis"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/74d2b5cebfe1cb28246542f122cdfe012a4bf9a0-908x338.png?w=2000&fit=max&auto=format"
                    alt="besiktas"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/acc04b084c3d771b47396fcefa59826743f0b85a-471x471.jpg?w=2000&fit=max&auto=format"
                    alt="adiguzel"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/c1575f00c9c15209207e85170b013dde424f995e-425x250.png?w=2000&fit=max&auto=format"
                    alt="baba"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/dabea5d876c9028f2385023f851b57c3947ba8c6-512x250.png?w=2000&fit=max&auto=format"
                    alt="bahsis"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6" data-aos="zoom-in">
                <div
                  className="border d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.sanity.io/images/9i295oms/production/74d2b5cebfe1cb28246542f122cdfe012a4bf9a0-908x338.png?w=2000&fit=max&auto=format"
                    alt="besiktas"
                    style={{ maxHeight: "140px" }}
                  />
                </div>
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
