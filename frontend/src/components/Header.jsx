import React from 'react';
import SiteMenu from './SiteMenu';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

import {Mobile} from './util/ResponsiveWrapper';

const styles = {
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

    header: {
        padding: '0.3em 0.4em',
        backgroundImage: 'url(images/placeholder.jpg)'
    },
    title: {
        paddingLeft: '1.8em',
        fontSize: '1.6em',
        lineHeight: '1.6em',
        marginLeft: '0.4em',
        fontVariant: 'small-caps',
        color: 'white'
    }
};

class Header extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        const classes = this.props.classes;

        return (
            <div className={classes.header}>
                <Mobile>
                    <button
                        className={classes.menuButton} 
                        onClick={this.props.menuClick}></button>
                </Mobile>

                {/*<a className={classes.menuLink} href="#">&nbsp;</a>*/}
                <span className={classes.title}>{this.props.title}</span>
            </div>
        );
    }

}

export default withStyles(styles)(Header);