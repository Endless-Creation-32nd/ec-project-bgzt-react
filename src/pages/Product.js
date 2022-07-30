import { useParams } from "react-router-dom";

function Product(props) {
  const { productId } = useParams();
  return (
    <section className="flex justify-center">
      <div className="w-[1024px]">
        <div>
          <div className="flex px-[30px]">{productId}</div>
        </div>
      </div>
    </section>
  );
}

export default Product;
