import React from 'react';
import Home from './pages/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="JK2Jh-ua8QBYd0zlapWe0zCBUaTzHBMEEoR7wncwEyg"
        />
      </Helmet>
      <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
        <Home />
      </div>
    </>
  );
}

export default App;
