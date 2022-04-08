import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './views/Layout';
import { LoginForm } from './components/LoginForm';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { About } from './components/About';
import { ProtectedRoute } from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/home" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="users" element={<ProtectedRoute><Users /></ProtectedRoute>}/>
          <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          {/* <Route path="*" element={<div>404 - not found</div>} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;