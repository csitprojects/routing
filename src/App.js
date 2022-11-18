import {BrowserRouter, Routes, Route} from "react-router-dom";
import Book from "./Book"
import { BooksLayout } from "./BookLayout";
import Home from "./Home";
import BookList from "./BookList"
import NewBook from "./NewBook"
import NotFound from "./NotFound";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    
    
    <Route path="/books" element={<BooksLayout />}>
      <Route index element={<BookList />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
    </Route>
    
    <Route path="*" element={<NotFound />} />


  </Routes>
  </BrowserRouter>
  );
}

export default App;
