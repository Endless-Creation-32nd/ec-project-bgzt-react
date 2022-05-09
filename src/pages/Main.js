import { useEffect } from "react";

function Main() {
  useEffect(() => {
    fetch("/latestProducts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
}
export default Main;
