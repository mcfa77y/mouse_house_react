import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import Mouse_List from './pages/mouse/Mouse_List';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mouse_list">Mouse List</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/mouse_list" component={Mouse_List} />
    </div>
  </Router>
);

export default App;
