import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { withStyles } from '@material-ui/core/styles';


var sidebarStyle = {
    sidebar: {
        background: '#00003e',
        width: '70%',
        maxWidth: '16em' /* TODO test in portrait mode */
    }
};
var styles = {
    menuButton: {
        position: 'absolute',
        top: '0.8em',
        left: '1.3em',
        width: '2.5em',
        height: '2.5em',
        background: 'lightblue url(images/menu.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        padding: '1em',
        border: 'none',
        borderRadius: '0.5em'
    },
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

class SiteMenu extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        };

        this.sidebarStateChanged = this.sidebarStateChanged.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    /* sync state of menu with state of component */
    sidebarStateChanged (open) {
        this.setState({menuOpen: open})  
    }

    closeMenu(){
        this.setState({menuOpen: false});
    }
    
    render(){
        const classes = this.props.classes;

        return (
            <Sidebar
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
                styles={sidebarStyle}>
                    <button className={classes.menuButton} onClick={() => this.sidebarStateChanged(true)}></button>
            </Sidebar>
        );
    }
}

export default withStyles(styles)(SiteMenu);