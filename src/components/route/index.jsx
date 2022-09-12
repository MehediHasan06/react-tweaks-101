import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { Navbar } from "./Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

const RoutePractice = () => {
  return (
    <div>
      <BrowserRouter>
        {/* we can do all route related task inside this component */}
        <Navbar/> 

        <Routes> 
          {/* Inside <Routes> we can only define the routes. Everything changes in between this component */}
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about/:profile" element={<About/>}/>
          <Route path="*" element={<h2>Page Not Found</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default RoutePractice;