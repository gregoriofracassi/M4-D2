import React from "react"
import { Container, Form } from "react-bootstrap"
import history from "../data/history.json"
import BookList from "./BookList"

class Search extends React.Component {
  state = {
    query: "foaeih",
  }

  search = (searchQuery) => {
    const filteredBooks = history.filter((book) =>
      book.title.toLowerCase().includes(searchQuery)
    )
    return filteredBooks
  }

  render() {
    return (
      <Container>
        <Form.Group>
          <Form.Control
            id="search"
            value={this.state.query}
            onChange={(e) => {
              this.setState({ query: e.target.value })
            }}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <BookList list={this.search(this.state.query)} />
      </Container>
    )
  }
}

export default Search
