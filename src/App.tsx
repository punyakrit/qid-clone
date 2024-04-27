import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

import Main from "./page/Main";
import AppRoute from "./page/AppRoute";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Appbar />
      <div>
        <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/app" element={ <AppRoute />}/>

       
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
