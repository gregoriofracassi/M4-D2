import { Card, Container, Row } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <Container>
      <Row className="d-flex justifi-content-center">
        <Card>
          <Card.Img variant="top" className="img-fluid" src={props.image} />
          <Card.Body>
            <h6>{props.title}</h6>
            <hr />
            <p>{props.category}</p>
            <p>€ {props.price}</p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default SingleBook
