import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    img: {
        width: '100%',
        height: '100%',
    }
};  

class ComicPage extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        // load
    }

    render(){
        const classes = this.props.classes;
        return (
            <div>
                <img className={classes.img} src="images/placeholder.jpg"/>
            </div>
        );
    }

}

export default withStyles(styles)(ComicPage);