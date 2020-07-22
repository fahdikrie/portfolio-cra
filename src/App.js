import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';

function App() {
  return (
    <Layout>
      <Homepage/>
    </Layout>
  );
}

export default App;
