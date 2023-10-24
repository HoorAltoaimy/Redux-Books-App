import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        
          <Link to="/books">Books</Link>
       
          <Link to="/add-book">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
