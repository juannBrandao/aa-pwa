import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/organisms/loginForm";

import PageConfig from "./pages/Config";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PageConfig />}/>
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
