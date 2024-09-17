import CreateTask from './Component/CreateTask';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="" element={<CreateTask />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
