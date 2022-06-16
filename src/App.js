import { Routes, Route } from 'react-router-dom';

import Rating from './component/Rating';
import ThankYou from './component/ThankYou';

import './App.css';

function App() {
  

  return (
    <div className="container">
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Rating />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
