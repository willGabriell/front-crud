import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import UserList from './components/userList/UserList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/userlist' element={<UserList />} />
    </Routes>
  </Router>
);
