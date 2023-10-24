import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "Endless Night", author: "Agatha Christie" },
    { id: 2, title: "Letters to Milena", author: "Franz Kafka" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
    state.books.push(action.payload); //payload gets the new data passed when using this functio
    },
    deleteBook: (state, action) => {
        const id = action.payload;
        state.books = state.books.filter((book) => book.id !== id);
    },
    editBook: (state, action) => {
        const {id, title, author} = action.payload;
        const bookFound = state.books.find((book) => book.id === id);
        if(bookFound){
          bookFound.title = title;
          bookFound.author = author;
        }
    //    if(book){
    //     const newTitle = prompt("Enter the new title:");
    //     const newAuthor = prompt("Enter the new author:");
    //     if (newTitle && newAuthor) {
    //     book.title = newTitle;
    //     book.author = newAuthor;
    //     }
    //    }
    //    else{
    //     alert('!!')
    //    }
    },
  },
});

export const { addBook, deleteBook,editBook } = booksSlice.actions;
export default booksSlice.reducer;
