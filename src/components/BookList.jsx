import React from "react"
import scifi from "../data/scifi.json"
import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import Comments from "./Comments"
import CommentForm from "./CommentForm"

// console.log(scifi)

class BookList extends React.Component {
  state = {
    selectedBook: {},
  }

  render() {
    console.log(this.state)
    return (
      <Container className="mt-5">
        <h5>Search Results</h5>
        <Row>
          <Col xs={6}>
            <Row>
              {this.props.list.map((book) => {
                return (
                  <SingleBook
                    click={(e) => {
                      this.setState({ selectedBook: book })
                    }}
                    key={`${book.asin}, ${book.category}`}
                    title={book.title}
                    image={book.img}
                  />
                )
              })}
            </Row>
          </Col>
          <Col xs={6}>
            <CommentForm />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
