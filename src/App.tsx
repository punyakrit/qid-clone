import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

import Main from "./page/Main";
import AppRoute from "./page/AppRoute";
import CForm from "./page/CForm";
import Contact from "./page/Contact";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Appbar />
      <div>
        <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/app" element={ <AppRoute />}/>
        <Route path="/home/c-form-automation-for-hotels" element={ <CForm />}/>
        <Route path="/support" element={ <Contact />}/>


       
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
