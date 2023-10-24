import { ChangeEvent, FormEvent, useState } from "react";
import { addBook } from "./booksSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newBook = {
      id: new Date().getMilliseconds(),
      title: title,
      author: author,
    };
    if(!title || !author){
        alert('add title and author')
    } else{
        dispatch(addBook(newBook));
        navigate('/books');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "title") {
            setTitle(event.target.value);
          } else if (event.target.name === "author") {
            setAuthor(event.target.value);
          }
  };

  return (
    <div>
      <h2>Add Book</h2>

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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
