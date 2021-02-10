import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Form className="login-form rounded ">
        <Form.Group controlId="formBasicEmail">
          <h1>
            <span className="font-weight-bold"> GO MY CODE</span>
          </h1>
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn-lg btn-dark btn-block">LOG IN</Button>
      </Form>
    </div>
  );
}

export default App;
