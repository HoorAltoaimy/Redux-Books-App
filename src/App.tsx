import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./components/Books";
import Home from "./pages/Home";
import AddBook from "./components/AddBook";
import Navbar from "./Navbar";
import EditBook from "./EditBook";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/add-book" element={<AddBook />}></Route>
          <Route path="/edit-book" element={<EditBook />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
