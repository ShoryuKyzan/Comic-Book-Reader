import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { withStyles } from '@material-ui/core/styles';


var styles = {};

// needed by Menu
var burgerStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '2.2em',
        height: '1.9em',
        left: '1em',
        top: '0.6em'
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        right: '4em'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'block',
        padding: '0.3em 0.4em',
        marginBottom: '0.5em',
        width: '100%',
        background: 'white',
        color: 'black'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};
  
class SiteMenu extends React.Component
{
    constructor(props){
        super(props);
    }

    // TODO auto-close menu on link click
    
    render(){
        const classes = this.props.classes;
        return (
            <Menu styles={burgerStyles}>
                <Link to="/">Home</Link>
                <Link to="/archive">Archive</Link>
            </Menu>
            );
        }

}

export default withStyles(styles)(SiteMenu);