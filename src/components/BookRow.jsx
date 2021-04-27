import { Container, Row, Col } from "react-bootstrap"

const BookRow = (props) => {
  const genre = props.genre
  const last6 = [...genre.slice(-6)]
  return (
    <Container className="mt-5">
      <h5>{props.title} Books</h5>
      <Row>
        {last6.map((book) => (
          <Col xs={2} key={book.asin}>
            <img src={book.img} className="img-fluid" alt="" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookRow
