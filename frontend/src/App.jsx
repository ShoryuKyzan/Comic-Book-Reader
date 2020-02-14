import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Backend from './api/Backend';


import SeriesPage from './components/SeriesPage';



const siteSeries = 'lonely-hooves';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      series: null
    };
  }

  async componentDidMount(){
    const series = await Backend.Series.getByName(siteSeries);
    this.setState({series});
  }

  render() {
    return (
      <Router>
          {/* TODO Link sidebar menu (mobile-first, collapses to menu hamburger) */}
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <SeriesPage series={this.state.series}/>
            </Route>
          </Switch>
      </Router>
    );
  }

}

export default App;
