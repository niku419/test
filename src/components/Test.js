import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, Button, Row, Col, Modal } from 'react-bootstrap';

function Test() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform backend API call to store the data
    setShowModal(true);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setGender('');
    setSkills('');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register user</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='d-flex mt-2 justify-center'><h1><div>User Data</div></h1></div>
      <Container className='center'>
        <Row className="mt-3 width-40">
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check inline type="radio" label="Male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                  <Form.Check inline type="radio" label="Female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Select value={skills} onChange={(e) => setSkills(e.target.value)}>
                  <option value="">Select</option>
                  <option value="JS">JavaScript</option>
                  <option value="React">React</option>
                  <option value="API">API</option>
                  <option value="Backend">Backend</option>
                </Form.Select>
              </Form.Group>
              <div className='d-flex justify-center'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" className="ms-2" onClick={handleReset}>
                    Reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" fixed="bottom">
        <Container>
          <Navbar.Text className='d-flex'>
            <Nav.Link href="#home" className='mr-2'>Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're logged in successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Test;
