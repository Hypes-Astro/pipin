import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeViews';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        {/* Tambahkan rute lain sesuai kebutuhan proyek Anda */}
      </Switch>
    </Router>
  );
};

export default App;
