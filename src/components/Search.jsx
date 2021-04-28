import React from "react";
import { Button, Form } from "react-bootstrap";
import history from "../data/history.json";

class Search extends React.Component {
  state = {
    query: "hello",
  };

  render() {
    return (
      <Form.Group>
        <Form.Control
          id="name"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target })}
          // onChange={this.handleChang
          type="text"
          placeholder="Enter name"
        />
        <Button variant="primary">search</Button>
      </Form.Group>
    );
  }
}

export default Search;
