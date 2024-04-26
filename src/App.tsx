import Analytics from "./components/Analytics";
import Appbar from "./components/Appbar";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Home from "./page/Home";

function App() {
  return (
    <div >
      <Appbar />
      <div>
        <Home />
        <Info/>
        <Business/>
        <Analytics/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
