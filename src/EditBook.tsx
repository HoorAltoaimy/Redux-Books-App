import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./components/booksSlice";
import { useDispatch } from "react-redux";


const EditBook = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
const {state} = useLocation();

const [id, setId] = useState(state.id);
const [title, setTitle] = useState(state.title);
  const [author, setAuthor] = useState(state.author);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
        setTitle(event.target.value);
      } else if (event.target.name === "author") {
        setAuthor(event.target.value);
      }
};

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const editedBook = {
      id: id,
      title: title,
      author: author,
    };
    if(!title || !author){
        alert('add title and author')
    } else{
         dispatch(editBook(editedBook));
        navigate('/books');
    }
  };



  return (
    <div>
      <h2>Edit Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={author}
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditBook;
