import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Head from "./Home/Head";

function App() {

  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Head/>}/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
