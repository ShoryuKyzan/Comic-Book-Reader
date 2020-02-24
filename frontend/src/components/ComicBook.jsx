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
        
        //pre-bind
        this.firstPage = this.firstPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
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

    _setPage(pageIndex){
        const maxPage = this.state.pages.length - 1;
        if(pageIndex < 0 || pageIndex > maxPage){
            return;
        }
        this.setState({
            pageIndex,
            page: this.state.pages[pageIndex]
        });
    }
    nextPage(){
        // advance page but not past end
        let pageIndex = this.state.pageIndex + 1;
        this._setPage(pageIndex);
    }

    prevPage(){
        let pageIndex = this.state.pageIndex - 1;
        this._setPage(pageIndex);
    }

    firstPage(){
        this._setPage(0);
    }

    lastPage(){
        this._setPage(this.state.pages.length - 1);
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
        // nothing to show if empty
        if(!this.state.pages || this.state.pages === []){
            return (<div></div>);
        }
        const classes = this.props.classes;

        return (
            <div>
                <div className={classes.wrapper} onClick={this.nextPage}>
                    <ComicPage page={this.state.page}/>
                </div>
                <Pager
                    onFirst={this.firstPage}
                    onPrev={this.prevPage}
                    onNext={this.nextPage}
                    onLast={this.lastPage}/>
            </div>
        );
    }

}

export default withStyles(styles)(ComicBook);
