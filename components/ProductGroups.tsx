// import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 0,
    title: "Group 1",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/kategoriler/chiller-so%C4%9Futma-sistemi-removebg-preview.png",
  },
  {
    id: 1,
    title: "Group 2",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/kategoriler/endustriyel-so%C4%9Futma-yedek-parcalar%C4%B1-2.png",
  },
  {
    id: 2,
    title: "Group 3",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/kategoriler/54Q6JC2FV_resim_10_2_2020_14.png",
  },
  {
    id: 3,
    title: "Group 4",
    thumbnail:
      "https://rensogutma.com/tema/genel/uploads/kategoriler/unnamed.png",
  },
];

export default function ProductGroups() {
  return (
    <section className="product-groups section-bg" id="product-groups">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>პროდუქტის ჯგუფები</h2>
        </div>
        <div className="row gy-4">
          {data.map((group, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div className="group-item">
                <img
                  className="group-img"
                  src={group.thumbnail}
                  alt={group.title}
                />
                <div className="group-info">
                  <h3 className="group-title">{group.title}</h3>
                  <Link href={"/category/" + group.id} className="group-link">
                    პროდუქტების ნახვა<i className="bi bi-arrow-right"></i>
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
