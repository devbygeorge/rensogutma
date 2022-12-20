// import Image from "next/image";
import Link from "next/link";

const data = {
  id: 0,
  title: "Project 1",
  image: "https://rensogutma.com/tema/genel/uploads/projeler/proje-3.jpeg",
  state: "Ongoing",
  desc: "Lorem ipsum",
};

export default function RecentProjects() {
  return (
    <section className="recent-projects" id="recent-projects">
      <div className="container" data-aos="fade-up">
        <div className="section-header d-flex justify-content-between align-items-center">
          <h2 className="left">უახლესი პროექტები</h2>
          <Link href="/projects">ყველა</Link>
        </div>
        <div className="project-content position-relative">
          <img className="project-img" src={data.image} alt={data.title} />
          <div className="project-info">
            <span className="project-mark">{data.state}</span>
            <h3 className="project-title">{data.title}</h3>
            <p className="project-desc">{data.desc}</p>
            <Link href={"/projects/" + data.id} className="project-link">
              მეტის გაგება
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
