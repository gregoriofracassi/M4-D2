import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyJumbo from "./components/MyJumbo"
import BookList from "./components/BookList"
import Search from "./components/Search"

const App = () => {
  return (
    <div>
      <MyNav />
      <MyJumbo />
      <Search />
      <BookList />
      <MyFooter />
    </div>
  )
}

export default App
