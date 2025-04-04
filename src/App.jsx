import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Head from "./Home/Head";
import Mousepointer from "./other/Mousepointer";
import Glowingball from "./Home/Glowingball";

function App() {

  return (
    <>

      <div style={{ backgroundColor: "#0D0D0D", height: "100vh", color: "#0D0D0D",  width: "100vw"}}>
        <BrowserRouter>
            <Header />
            <Mousepointer />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
