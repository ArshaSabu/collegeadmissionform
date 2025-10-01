import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, dob } = formData;
    if (name && email && phone && course && dob) {
      alert(
        `Admission Form Submitted!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\nDate of Birth: ${dob}`
      );
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      dob: "",
    });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              margin: "0 auto",
            }}
          >
            <h3 className="text-center mb-4">College Admission Form</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Course</Form.Label>
                <Form.Select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">--Choose--</option>
                  <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.A English">B.A English</option>
                  <option value="B.Tech">B.Tech</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="success" type="submit">
                  Submit
                </Button>
                <Button variant="danger" type="button" onClick={handleClear}>
                  Clear
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

      </Row>

     
    </Container>
  );
}

export default App;
