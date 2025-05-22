
import React, { useState } from 'react';
// ↳ We need useState to track the form inputs and the result message.

function Login() {
    // useState('') is a React Hook that lets a functional component “remember” a value between renders
    // State hooks for username, password, and feedback message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');

  

  // Handle form submission 
  const handleSubmit = e => {
    e.preventDefault(); // Prevent page reload
    if (username === 'admin' && password === 'password') {
      setMessage('Login success');
      console.log('Login success');
    } else {
      setMessage('Login failed');
      console.log('Login failed');
    }
  };


  //<div> is a block-level element that groups content together
    // <h2> is a block-level element that represents a section heading
    // <form> is a block-level element that represents a form
    // <label> is a block-level element that represents a label for an input element
    // <input> is an inline element that represents an input field
    // <p> is a block-level element that represents a paragraph

  return (
      <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
      <div className="login-row">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="login-row">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-button">Login</button>
</form>
  {message && (
        <p className={message === 'Login success'
            ? 'success-label'
            : 'error-label'}>
          {message}
        </p>
      )}
  </div>
    );
  }

export default Login; // Only 1 default export per file