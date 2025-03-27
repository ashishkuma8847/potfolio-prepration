import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Head from "./Home/Head";
import Mousepointer from "./other/Mousepointer";
import Glowingball from "./other/Glowingball";

function App() {

  return (
    <>

      <div style={{ backgroundColor: "#0D0D0D", height: "100vh", color: "#0D0D0D", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <BrowserRouter>
            <Header />
            <Glowingball />
            <Mousepointer />
              <Routes>
                <Route path="/" element={<Head />} />
              </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
