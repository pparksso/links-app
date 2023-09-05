import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '@/styles/GlobalStyles';
import Login from '@/pages/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
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
