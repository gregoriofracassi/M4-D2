import { Container, Row, Col } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import historyBooks from "../data/history.json"
import horrorBooks from "../data/horror.json"

const latestFromAll = [
  ...fantasyBooks.slice(-2),
  ...historyBooks.slice(-2),
  ...horrorBooks.slice(-2),
]
console.log(latestFromAll)

const LatestReleases = () => {
  return (
    <Container>
      <h5>Latest Releases</h5>
      <Row>
        {latestFromAll.map((book) => (
          <Col xs={2} key={book.asin}>
            <img src={book.img} className="img-fluid" alt="" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default LatestReleases
