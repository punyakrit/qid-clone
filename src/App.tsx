import Appbar from "./components/Appbar";
import Info from "./components/Info";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Appbar />
      <div className="">
        <Home />
        <Info/>
      </div>
    </div>
  );
}

export default App;
