// import React, { useState } from 'react';
// import AuthService from "../Auth/Authuser";

// const LoginComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// const [message, setMessage] = useState('');

//   const handleLogin = () => {
//     // Simulated user data (replace this with your actual user data)
//     const validUsername = "user123";
//     const validPassword = "password123";

//     // Perform authentication logic
//     if (username === validUsername && password === validPassword) {
//       // Authentication successful, call AuthService.login() to set the isLoggedIn flag
//       AuthService.login();
//          setMessage('Login successful!');
//       console.log("Login successful!");
//     } else {
//       // Authentication failed
// setMessage('Login failed. Invalid username or password.');
//       console.log("Login failed. Invalid username or password.");
//     }
//   };

//   return (
//     <div>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
// <div style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</div>
//      </div>
//   );
// };

// export default LoginComponent;

import React, { useState, useEffect } from 'react';
import AuthService from "../Auth/Authuser";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LoginComponent.css'; // Import a custom CSS file for additional styles

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication status when the component mounts
    setAuthenticated(AuthService.isLoggedIn());
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleLogin = () => {
    // Simulated user data (replace this with your actual user data)
    const validUsername = "user123";
    const validPassword = "password123";

    // Perform authentication logic
    if (username === validUsername && password === validPassword) {
      // Authentication successful, call AuthService.login() to set the isLoggedIn flag
      AuthService.login();
      console.log("Login successful!");
      setAuthenticated(true);
      window.location.reload();
      setError('');
    } else {
      // Authentication failed
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="login-form">
        <h2 className="login-heading">Login</h2>
          {authenticated ? (
            <div className="text-center">
              You are now authenticated!
            </div>
          ) : (
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleLogin} className="login-button">
                Login
              </Button>

              {error && <div className="mt-3 text-danger">{error}</div>}
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
