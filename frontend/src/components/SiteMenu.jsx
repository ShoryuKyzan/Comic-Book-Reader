import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Sidebar from "react-sidebar";
import {DesktopSensor} from './util/ResponsiveWrapper';

var sidebarStyle = {
    sidebar: {
        background: '#00003e',
        width: '70%',
        maxWidth: '16em' /* TODO test in portrait mode */
    }
};
var styles = {
    sidebar: {
        width: '100%',
        overflow: 'hidden'
    },
    menuLink: {
        display: 'block',
        padding: '0.5em 1.4em',
        marginBottom: '0.5em',
        background: 'white',
        color: 'black',
        borderRadius: '0.8em',
        textDecoration: 'none',
        fontVariant: 'small-caps'
    },
    menuLinksWrapper: {
        width: '13em',
        overflow: 'hidden',
        padding: '0.9em 1em'
    },
    menuTitle: {
        fontSize: '1.6em',
        marginLeft: '0.5em',
        fontVariant: 'small-caps',
        color: 'white'
    }
};

class SiteMenu extends React.Component {

  constructor(props){
    super(props);

    this.desktopSensor = new DesktopSensor(this.onDesktopMode);

    this.state = {
      menuOpen: false,
      desktopMode: this.desktopSensor.getState()
    };

    this.sidebarStateChanged = this.sidebarStateChanged.bind(this);
  }

  onDesktopMode = (desktopMode) => {
    this.setState({desktopMode});
  }

  /* sync state of menu with state of component */
  sidebarStateChanged (open) {
    this.setState({menuOpen: open});
  }

  componentWillUnmount() {
    this.desktopSensor.destroy();
  }

  toggleMenuOpen(){
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render(){
    const classes = this.props.classes;

    return (
      <div>
        <Sidebar
            docked={this.state.desktopMode}
            transitions={!this.state.desktopMode}
            contentId="content"
            sidebar={
                <div className={classes.sidebar}>
                    {/* TODO try and add a site title to sidebar */}
                    <div className={classes.menuTitle}>{this.props.menuTitle}</div>
                    <div className={classes.menuLinksWrapper}>
                        <Link className={classes.menuLink} onClick={this.closeMenu} to="/">Home</Link>
                        <Link className={classes.menuLink} onClick={this.closeMenu} to="/archive">Archive</Link>
                    </div>
                </div>
            }
            open={this.state.menuOpen}
            onSetOpen={this.sidebarStateChanged}
            styles={sidebarStyle} >
          

            {this.props.children}

        </Sidebar>
      </div>
    );
  }
}


export default withStyles(styles)(SiteMenu);