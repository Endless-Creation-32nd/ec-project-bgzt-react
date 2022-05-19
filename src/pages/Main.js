import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Main.css";

function Main() {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    fetch("/latestProducts")
      .then((res) => res.json())
      .then((res) => setLatestProducts(res.data));
  }, []);

  return (
    <section className="main">
      <div className="banner">banner</div>
      <h2>오늘의 상품 추천</h2>
      <div className="card-wrapper">
        {latestProducts.map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>
    </section>
  );
}
export default Main;
