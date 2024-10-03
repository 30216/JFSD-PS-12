import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    alert(`Login attempted with email: ${email}`);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#777',
    fontSize: '0.9rem',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#f4511e',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Login;
