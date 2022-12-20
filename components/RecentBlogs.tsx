// import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 0,
    title: "Blog 1",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/haberler/42918307658.jpg",
    date: "2002-01-01",
  },
  {
    id: 1,
    title: "Blog 2",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/haberler/1585143124_sosiad-logo-disi.jpg",
    date: "2002-01-01",
  },
  {
    id: 2,
    title: "Blog 3",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/haberler/1595539453_sosiad-isib-3.jpg",
    date: "2002-01-01",
  },
];

export default function RecentBlogs() {
  return (
    <section className="recent-blogs section-bg" id="recent-blogs">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>სიახლე</h2>
        </div>
        <div className="row gy-5">
          {data.map((blog, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div className="post-item position-relative h-100 bg-white">
                <div className="post-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={blog.thumbnail}
                    alt={blog.title}
                  />
                  <span className="post-date">{blog.date}</span>
                </div>
                <div className="post-content d-flex flex-column bg">
                  <h3 className="post-title">{blog.title}</h3>
                  <hr />
                  <Link
                    href={"/blogs/" + blog.id}
                    className="readmore stretched-link"
                  >
                    <span>გაიგეთ მეტი</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
