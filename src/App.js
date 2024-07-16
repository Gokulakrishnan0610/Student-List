import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favourites from "./Favourites";
import Student from "./Student"
import { useState } from "react";

function App() {

  const [item, setitem] = useState([])
 

  return (
    <div>
      <BrowserRouter>

        <nav className="bg-blue-500 p-5 flex flex-row gap-10">
          <Link to={"/"} className="text-2xl underline">List of Students</Link>
          <Link to={"/Favourites"} className="text-2xl underline">Favourite Students</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Student item={item} setitem={setitem} />} />
          <Route path="/Favourites" element={<Favourites item={item} setitem={setitem} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
