import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageConfig from "./pages/Config";
import Home from "./pages/Home";
import PageLogin from "./pages/Login";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PageConfig />}/>
        <Route path="login" element={<PageLogin />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
