// import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 0,
    title: "Service 1",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/hizmetler/ren-so%C4%9Futma-montaj.jpg",
    desc: "Lorem ipsum",
  },
  {
    id: 1,
    title: "Service 2",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/hizmetler/10758_st1280_089.png",
    desc: "Lorem ipsum",
  },
  {
    id: 2,
    title: "Service 3",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/hizmetler/consultancy2_1.jpg",
    desc: "Lorem ipsum",
  },
];

export default function Services() {
  return (
    <section className="services section-bg" id="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>სერვისები</h2>
        </div>
        <div className="row gy-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div className="service-item">
                <div className="service-desc position-relative">
                  <img className="service-img" src={item.thumbnail} alt="" />
                  <div className="service-overlay">
                    <p className="service-text">{item.desc}</p>
                    <Link href={"/services/" + item.id} className="service-btn">
                      გაიგეთ მეტი
                    </Link>
                  </div>
                </div>
                <div className="service-footer">
                  <h3 className="service-title">
                    <Link href={"/services/" + item.id}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
