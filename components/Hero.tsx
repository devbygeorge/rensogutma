// import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    id: 0,
    title: "სამრეწველო ტიპის გაგრილება",
    desc: "სპეციფიკური სამრეწველო გაგრილების დანადგარები თქვენი პროექტებისთვის",
    image:
      "https://cdn.sanity.io/images/9i295oms/production/797bcdfe3e5a68a458cebfb6994c1701abf871b5-960x538.jpg?w=2000&fit=max&auto=format",
  },
  {
    id: 1,
    title: "ცივი ოთახის კარები",
    desc: "ცივი ოთახის კარების პროფესიონალური წარმოება",
    image:
      "https://cdn.sanity.io/images/9i295oms/production/23a9cf407ce1d2acd728fb24d3d808ee331d3cda-960x538.jpg?w=2000&fit=max&auto=format",
  },
  {
    id: 2,
    title: "ცივი ოთახის სათავსოები",
    desc: "სპეციალური ცივი ოთახის საწყობები თქვენი პროექტებისთვის",
    image:
      "https://cdn.sanity.io/images/9i295oms/production/a9096bf6adb751e9c11c089287a8b70ef5f1a855-960x538.jpg?w=2000&fit=max&auto=format",
  },
  {
    id: 3,
    title: "საჭიროების მიხედვით წარმოება",
    desc: "სპეციფიკური ანაზრაურების პროდუქცია თქვენი პროექტისთვის",
    image:
      "https://cdn.sanity.io/images/9i295oms/production/315b68414c1912a76934ef18e489b113aa0dfa0c-960x538.jpg?w=2000&fit=max&auto=format",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Carousel fade wrap pause="hover">
        {data?.map((item, i) => (
          <Carousel.Item
            key={i}
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
          >
            <Carousel.Caption>
              <h2 data-aos="fade-down">{item.title}</h2>
              <p data-aos="fade-up">{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
