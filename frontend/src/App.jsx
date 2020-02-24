import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link // XXX
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Backend from './api/Backend';

import SeriesPage from './components/SeriesPage';
import Header from './components/Header';

const siteSeries = 'lonely-hooves';

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden'
  },
  bodyWrapper:{
    position: 'absolute',
    top: '3em',
    bottom: '0',
    left: '0',
    right: '0',
    overflow: 'scroll',
    backgroundColor: '#2f2f5f'
  }
};

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
    const classes = this.props.classes;
    return (
      <div className={classes.main}>
        <Router>
          <Header title={this.state.series ? this.state.series.name : ''}/>
          <div className={classes.bodyWrapper}>
            <Switch>
              <Route path="/archive">
                TODO archive page
              </Route>
              <Route path="/">
                <SeriesPage series={this.state.series}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}

export default withStyles(styles)(App);
