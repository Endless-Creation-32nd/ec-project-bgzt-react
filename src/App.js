import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-w-[1236px]">
          <Topbar />
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/products/:productId" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
