import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
