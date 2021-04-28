import scifi from "../data/scifi.json"
import { Container, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"

// console.log(scifi)

const BookList = (props) => {
  const last12 = [...scifi.slice(-12)]
  return (
    <Container className="mt-5">
      <h5>Books</h5>
      <Row>
        {last12.map((book) => {
          return (
            <SingleBook key={book.asin} title={book.title} image={book.img} />
          )
        })}
      </Row>
    </Container>
  )
}

export default BookList
