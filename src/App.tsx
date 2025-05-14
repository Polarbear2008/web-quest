import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Task from './pages/Task';
import Process from './pages/Process';
import Resources from './pages/Resources';
import Evaluation from './pages/Evaluation';
import Conclusion from './pages/Conclusion';
import Upload from './pages/Upload';
import Admin from './pages/Admin';
import TeacherPage from './pages/Teacher';
import TeacherExtension from './pages/TeacherExtension';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="task" element={<Task />} />
          <Route path="process" element={<Process />} />
          <Route path="resources" element={<Resources />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route path="conclusion" element={<Conclusion />} />
          <Route path="upload" element={<Upload />} />
          <Route path="admin" element={<Admin />} />
          <Route path="teacher" element={<TeacherPage />} />
          <Route path="teacher-extension" element={<TeacherExtension />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;