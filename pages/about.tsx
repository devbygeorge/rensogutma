import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Cta from "@/components/Cta";

const data = {
  mission: "Hello Mission",
  policy: "Hello Policy",
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>rensogutma - about page</title>
        <meta name="description" content="rensogutma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>ჩვენს შესახებ</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>ჩვენს შესახებ</li>
            </ol>
          </div>
        </div>

        {/* About Section */}
        <About />

        {/* our policy section */}
        <section className="alt-about section-bg" id="alt-about-2">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: "url('/images/about/policy.jpg')" }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                {data.policy}
              </div>
            </div>
          </div>
        </section>

        {/* our vision section */}
        <section className="alt-about" id="alt-about-2">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                {data.mission}
              </div>
              <div
                className="col-lg-5 img-bg"
                style={{ backgroundImage: "url('/images/about/vision.png')" }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>
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
