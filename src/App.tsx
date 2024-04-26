import Appbar from "./components/Appbar";
import Business from "./components/Business";
import Info from "./components/Info";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Appbar />
      <div className="">
        <Home />
        <Info/>
        <Business/>
      </div>
    </div>
  );
}

export default App;
