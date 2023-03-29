import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageConfig from "./pages/Config";
import PageLogin from "./pages/Login";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PageConfig />}/>
        <Route path="login" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
