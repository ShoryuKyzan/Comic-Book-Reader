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
        let pageImg = "";
        if(this.props.page){
            pageImg = this.props.page.image;
        }
        
        return (
            <div>
                <img className={classes.img} src={pageImg}/>
            </div>
        );
    }

}

export default withStyles(styles)(ComicPage);