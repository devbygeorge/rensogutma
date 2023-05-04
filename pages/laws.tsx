import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const data = {
  article: "Hello World",
};

export default function LawsPage() {
  return (
    <>
      <Head>
        <title>Rensogutma - Laws Page</title>
      </Head>
      <Header />
      <main className="main">
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>შინაგანაწესი</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>შინაგანაწესი</li>
            </ol>
          </div>
        </div>

        {/* bylaws section */}
        <section className="bylaws" id="bylaws">
          <div className="container" data-aos="fade-up">
            {data.article}
          </div>
        </section>

        {/* cta section */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}
