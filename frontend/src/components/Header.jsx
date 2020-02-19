import React from 'react';
import SiteMenu from './SiteMenu';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const styles = {
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
                <SiteMenu menuTitle={this.props.title}/>
                {/*<a className={classes.menuLink} href="#">&nbsp;</a>*/}
                <span className={classes.title}>{this.props.title}</span>
            </div>
        );
    }

}

export default withStyles(styles)(Header);