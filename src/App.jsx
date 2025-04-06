import {  BrowserRouter as  Router,Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Mousepointer from "./other/Mousepointer";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedRoutes = () => {
  const location = useLocation(); 

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

      <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (""
      )} */}
        <Router>
      <div style={{ backgroundColor: "#0D0D0D", height: "100vh", color: "#0D0D0D",  width: "100vw"}}>  

          <Header />
      <Mousepointer />
          <AnimatedRoutes />
          </div>
        </Router>
    </>
  );
};

export default App;

