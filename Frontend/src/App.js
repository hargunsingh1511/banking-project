// import React from 'react';
// import Dashboard from './Dashboard';
// import start from './start';

// function App() {
//   return (
//     <div>
//       <Dashboard />
//       <start />
//     </div>
//   );
// }

// export default App;
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Start from './start';
import Login from './LoginDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/start" element={<Start />} />
        <Route path="/LoginDetails" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


