import { Card, Col } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <Col xs={4}>
      <Card onClick={props.click} className="my-3">
        <Card.Img variant="top" className="img-fluid" src={props.image} />
      </Card>
    </Col>
  )
}

export default SingleBook
