import { Card, Col } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <Col xs={4}>
      <Card onClick={props.click}>
        <Card.Img variant="top" className="img-fluid" src={props.image} />
        <Card.Body>
          <h6>{props.title}</h6>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
