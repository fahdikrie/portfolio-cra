import React from 'react';
import './fonts/fonts.css';
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
