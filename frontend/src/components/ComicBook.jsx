import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ComicPage from './ComicPage';
import Pager from './Pager';

const styles = {
    wrapper: {
        width: '100%',
        height: '100%'
    },
};  
class ComicBook extends React.Component
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
        /*
        (mobile) on-double-click/tap - zoomed in mode
            (mobile) pinch/pull zoomable image
                (mobile) scrollable if zoomed in
            (mobile) on swipe left or right far enough, go to next/prev page
        (desktop) on click page, next page
        (desktop) should be able to zoom
        (desktop) should show 1/3 or 1/4 page if portrait, depending on browser width (more height for larger browser screens)
            * should  be fairly static size after that, no fluid width/height affects
        */
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.wrapper}>
                    <ComicPage />
                </div>
                <Pager />
            </div>
        );
    }

}

export default withStyles(styles)(ComicBook);
