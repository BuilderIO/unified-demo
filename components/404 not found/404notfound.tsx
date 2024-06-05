import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '5rem', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Oops! Page not found.</h2>
      <p>We can&apos;t find the page you&apos;re looking for. You might have the wrong address, or the page may have moved.</p>
      <p style={{ marginTop: '30px', fontStyle: 'italic' }}>But don&apos;t worry, you can always go back to the <a href="/" style={{ color: '#007bff' }}>homepage</a> or stay here and enjoy a joke!</p>
      <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>Why do we never tell secrets on a farm?<br /><span style={{ fontWeight: 'bold' }}>Because the potatoes have eyes and the corn has ears.</span></p>
    </div>
  );
};

export default NotFound;
