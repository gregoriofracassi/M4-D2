import { Navbar, Nav } from "react-bootstrap"

const MyNav = () => {
  return (
    <>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default MyNav
