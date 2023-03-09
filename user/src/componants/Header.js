import { BsWhatsapp,BsLinkedin,BsInstagram,BsFacebook,BsEnvelopeFill } from "react-icons/bs";
import {Button,Container,Form,Nav,Navbar,NavDropdown,} from 'react-bootstrap';
export const Header = () => {
  return (
    <>
      <Navbar  sticky="top" expand="lg" className='p-3 navbar_bg'>
        <Container fluid>
          <img src={require('./img/logo.png')} className="logo" alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="https://www.linkedin.com/in/jenu-nakrani-136051253/" className='text-light nav first_nav'><BsLinkedin className="icon_know"/></Nav.Link>
              <Nav.Link href="https://web.whatsapp.com/" className='text-light nav'><BsWhatsapp className="icon_know"/></Nav.Link>
              <Nav.Link href="https://www.instagram.com/jenunakrani/" className='text-light nav'><BsInstagram className="icon_know"/></Nav.Link>
              <Nav.Link href="https://www.facebook.com/mahesh.nakrani.9484/" className='text-light nav'><BsFacebook className="icon_know"/></Nav.Link>
              <Nav.Link href="https://mail.google.com/mail/u/0/#inbox" className='text-light nav'><BsEnvelopeFill className="icon_know"/></Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  )
}
