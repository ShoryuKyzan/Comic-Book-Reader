import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        width: '100%',
        textAlign: 'center'
    },
    innerWrapper: {
        display: 'inline-block',
    },
    button: {
        color: 'blue',
        backgroundColor: 'lightblue',
        border: '1px solid blue',
        lineHeight: '0em',
        fontSize: '1.8em',
        verticalAlign: 'top',
        display: 'inline-block',
        width: '1em',
        height: '1.1em',
        margin: '0 0.2em',
        padding: '0.1em 0',
    },
    flButton: {
        width: '1.5em'
    }
};  

class Pager extends React.Component
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
            <div className={classes.wrapper}>
               <div className={classes.innerWrapper}>
                <button className={classes.button + ' ' + classes.flButton}>&lt;&lt;</button>
                <button className={classes.button}>&lt;</button>
                <button className={classes.button}>&gt;</button>
                <button className={classes.button + ' ' + classes.flButton}>&gt;&gt;</button>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(Pager);