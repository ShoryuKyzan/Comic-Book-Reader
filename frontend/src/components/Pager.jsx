import React from 'react';
import PropTypes from 'prop-types';
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
        border: 'transparent',
        borderRadius: '0.6em',
        lineHeight: '0em',
        fontSize: '1.8em',
        verticalAlign: 'top',
        display: 'inline-block',
        width: '1.8em',
        height: '1.3em',
        margin: '0 0.2em',
        padding: '0.3em 0.2em',
    },
    flButton: {
        width: '2.3em'
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
                <button onClick={this.props.onFirst} className={classes.button + ' ' + classes.flButton}>&lt;&lt;</button>
                <button onClick={this.props.onPrev} className={classes.button}>&lt;</button>
                <button onClick={this.props.onNext} className={classes.button}>&gt;</button>
                <button onClick={this.props.onLast} className={classes.button + ' ' + classes.flButton}>&gt;&gt;</button>
                </div>
            </div>
        );
    }

}

Pager.propTypes = {
    onFirst: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onLast: PropTypes.func.isRequired
};


export default withStyles(styles)(Pager);