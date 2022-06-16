import Header from "./components/Header";
import Main from "./pages/Main";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="min-w-[1236px]">
        <Topbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
