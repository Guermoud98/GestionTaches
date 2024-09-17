import CreateTask from './Component/CreateTask';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import GetAllTasks from "./Component/GetAllTasks";
import GetTaskById from "./Component/GetTaskById";
import UpdateTask from "./Component/UpdateTask";
import DeleteTask from "./Component/DeleteTask";


function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="/create" element={<CreateTask />} />
                  <Route path="/get-tasks" element={<GetAllTasks />} />
                  <Route path="/get-task-by-id/:id" element={<GetTaskById />} />
                  <Route path="/update-task-by-id/:id" element={<UpdateTask />} />
                  <Route path="/delete-task-by-id/:id" element={<DeleteTask />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
