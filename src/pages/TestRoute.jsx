import React from 'react';
import { Link } from 'react-router-dom';

export default function TestRoute() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Test Route Working!</h1>
      <p>This is a test route to verify that routing is working correctly.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'blue' }}>Go to Home</Link>
        <Link to="/especialistas" style={{ marginRight: '1rem', color: 'blue' }}>Go to Especialistas</Link>
        <Link to="/empresas" style={{ color: 'blue' }}>Go to Empresas</Link>
      </div>
    </div>
  );
}
