import React from "react"
import { Form } from "react-bootstrap"
import history from "../data/history.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"
import horror from "../data/horror.json"
import fantasy from "../data/fantasy.json"
import BookList from "./BookList"

class CommentForm extends React.Component {
  state = {
    text: "",
    user: "",
  }

  book = this.props.book

  addCommentToBook = (comm) => {}

  render() {
    console.log(this.state)
    return (
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={this.state.user}
            type="text"
            placeholder="Your Username"
            onChange={(e) => this.setState({ user: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            value={this.state.text}
            type="text"
            placeholder="Why do you think of this book?"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default CommentForm
