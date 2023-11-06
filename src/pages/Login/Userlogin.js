import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a login request (replace this with your actual login logic)
    // For simplicity, here we're just checking if the email and password are not empty
    if (email && password) {
      // If login is successful, set isAuthenticated to true in local storage
      localStorage.setItem('isAuthenticated', 'true');
      // Call the parent component function to set isAuthenticated state
      setIsAuthenticated(true);
      // You can also store user data in local storage if needed
      localStorage.setItem('userEmail', email);
    } else {
      // Handle login failure (display an error message, etc.)
      console.error('Invalid email or password');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
  