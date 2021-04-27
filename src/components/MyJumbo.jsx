import { Container, Col, Jumbotron, Row } from "react-bootstrap"

const MyJumbo = () => {
  return (
    <Container className="mtop-xl">
      <Row>
        <Col xs={12}>
          <Jumbotron className="bg-warning">
            <h1>Bookerman</h1>
            <p>All your superfavourite books right here</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default MyJumbo
