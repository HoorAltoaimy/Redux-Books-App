import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { deleteBook } from "./booksSlice";
import { Link } from "react-router-dom";

function Books() {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  const { books } = useSelector((state: RootState) => state.booksR);

  return (
    <div>
      <h2>Books Management App</h2>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Author</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((book) => {
              const {id, title, author} = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to='/edit-book' state={{id, title, author}}> {/*state attribute helps taking data from one page to another*/}
                    <button >Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(book.id);
                      }}
                    >
                      Delete
                    </button>{" "}
                    {/* when click we just want to pass the id, so use this function notation*/}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
