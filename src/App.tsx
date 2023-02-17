import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Database from "./pages/Database";
import Nutrition from "./pages/Nutrition";
import Recipe from "./pages/Recipe";
import PageNotFound from "./pages/PageNotFound";
import { UserContent } from "./Context";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const { balance, isLoggedIn, name } = useContext(UserContent);

  console.log(name);

  return (
    <UserContent.Provider value={{ balance, isLoggedIn, name }}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContent.Provider>
  );
}

export default App;
