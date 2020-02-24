import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ComicPage from './ComicPage';
import Pager from './Pager';
import Backend from '../api/Backend';

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
            series: props.series,
            pageIndex: null,
            page: null
        };
    }

    async componentDidUpdate(prevProps){
        // load
        if(prevProps.series !== this.props.series){
            this.setState({series: this.props.series, pages: await Backend.Series.allPages(this.props.seriesId)});
            // TODO need to do some magic if current page state isnt in this set... i guess go to first page if it changed or somethin
            // XXX default behavior for now, first page
            this.setState({pageIndex: 0});
            this.setState({page: this.state.pages[this.state.pageIndex]});
        }
    }

    nextPage(){
        // advance page but not past end
        let nextPage = this.state.pageIndex + 1;
        const maxPage = this.state.pages.length - 1;
        if(nextPage > maxPage){
            return;
        }
        this.setState({
            pageIndex: nextPage,
            page: this.state.pages[nextPage]
        });
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
                <div className={classes.wrapper} onClick={this.nextPage.bind(this)}>
                    <ComicPage page={this.state.page}/>
                </div>
                <Pager />
            </div>
        );
    }

}

export default withStyles(styles)(ComicBook);
