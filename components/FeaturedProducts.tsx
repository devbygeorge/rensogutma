// import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 0,
    title: "Product 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQrlqY5nKnFkYpm940fVhkxzr8uTXxGivLXiUzFuU6OZyUJxWnBEkCmtzwqfINjAAB9w&usqp=CAU",
  },
  {
    id: 1,
    title: "Product 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQrlqY5nKnFkYpm940fVhkxzr8uTXxGivLXiUzFuU6OZyUJxWnBEkCmtzwqfINjAAB9w&usqp=CAU",
  },
  {
    id: 2,
    title: "Product 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQrlqY5nKnFkYpm940fVhkxzr8uTXxGivLXiUzFuU6OZyUJxWnBEkCmtzwqfINjAAB9w&usqp=CAU",
  },
  {
    id: 3,
    title: "Product 4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQrlqY5nKnFkYpm940fVhkxzr8uTXxGivLXiUzFuU6OZyUJxWnBEkCmtzwqfINjAAB9w&usqp=CAU",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="products" id="products">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>გამორჩეული პროდუქცია</h2>
        </div>
        <div className="row gy-4 text-center">
          {data?.map((product, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              <div className="product-item border">
                <div className="product-info shadow-sm">
                  <Link href={"/product/" + product.id}>
                    <img
                      className="product-img"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                  <h3 className="product-title">{product.title}</h3>
                </div>
                <Link href={"/product/" + product.id} className="product-link">
                  <span>სრულად ნახვა</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
