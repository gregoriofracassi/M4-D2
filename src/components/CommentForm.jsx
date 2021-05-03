import React from "react"
import { Form, Button } from "react-bootstrap"
import history from "../data/history.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"
import horror from "../data/horror.json"
import fantasy from "../data/fantasy.json"
import BookList from "./BookList"

class CommentForm extends React.Component {
  state = {
    comment: "",
    rate: 1,
    elementId: "",
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.book.asin !== this.props.book.asin) {
      this.setState({ elementId: this.props.book.asin })
    }
  }

  submitForm = async (e) => {
    e.preventDefault()
    console.log(this.state)
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MjAwNzQwMDAsImV4cCI6MTYyMTI4MzYwMH0.VQXk1mm2L2a7qhOiF2Gv9n1u0ooyGjFq96rQuKkokmk",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }
      )
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      const data = await response.json()
      console.log("succesfully added", data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.props.book.asin)
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            value={this.state.comment}
            type="text"
            placeholder="Why do you think of this book?"
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: parseInt(e.target.value) })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default CommentForm
