import scifi from "../data/scifi.json"
import { Container, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"

// console.log(scifi)

const BookList = (props) => {
  const list = props.list
  return (
    <Container className="mt-5">
      <h5>Search Results</h5>
      <Row>
        {list.map((book) => {
          return (
            <SingleBook
              key={`${book.asin}, ${book.category}`}
              title={book.title}
              image={book.img}
            />
          )
        })}
      </Row>
    </Container>
  )
}

export default BookList
