import { BrowserRouter } from "react-router-dom";
import TopNav from "./pages/topNav/TopNav";
import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import Brend from "./pages/brend/Brend";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <TopNav/>
    <Navbar/>
    <Home/>
    <Brend/>
    </BrowserRouter>
    </>
  )
}