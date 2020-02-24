import React from 'react';
import PropTypes from 'prop-types';
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
            // by default go to latest page
            this._setPage(this.state.pages.length - 1);
        }
        // handle chapter change
        if(prevProps.chapterId !== this.props.chapterId && this.props.chapterId){
            // if already in this chapter, do not change pages
            if(this.state.page.chapterId !== this.props.chapterId){
                let pageIndex = this.findFirstPageOfChapter(this.props.chapterId);
                if(this.props.skipNonChapterPages){
                    pageIndex = this.findChapterPage(true, pageIndex);
                }
                console.log('pageIndex', pageIndex); // XXX
                if(pageIndex !== null){
                    this._setPage(pageIndex);
                }
            }
        }
    }

    /**
     * Scans list for first page of desired chapter ID.
     * 
     * @param {int} chapterId 
     * @return {int|null} Page index in list or null if this chapter is not found.
     */
    findFirstPageOfChapter(chapterId){
        for(let i = 0; i < this.state.pages.length; i++){
            const page = this.state.pages[i];
            console.log('page', page, page.chapterId, chapterId);
            if(page.chapterId === chapterId){
                return i;
            }
        }
        return null;
    }
    /**
     * scans forward or backward in the page list to find chapter pages. if pageIndex is a chapter page it will return it immediately.
     * 
     * @param {bool} forward_or_backward True: find forward, false: find backward.
     * @param {int} pageIndex Index to start searching from.
     * @returns {int|null} - if int it found a page, if null it could not find a chapter page.
     */
    findChapterPage(forward_or_backward, pageIndex){
        let direction = forward_or_backward ? 1 : -1;
        for(let i = pageIndex; i >= 0 && i < this.state.pages.length; i+=direction){
            if(!this.state.pages[i].nonChapter){
                return i;
            }
        }
        return null;
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
        this.props.onPageChanged(this.state.pages[pageIndex]);
    }
    nextPage(){
        // advance page but not past end
        let pageIndex = this.state.pageIndex + 1;
        if(this.props.skipNonChapterPages){
            pageIndex = this.findChapterPage(true, pageIndex);
            if(!pageIndex){
                return;
            }
        }
        this._setPage(pageIndex);
    }

    prevPage(){
        let pageIndex = this.state.pageIndex - 1;
        if(this.props.skipNonChapterPages){
            pageIndex = this.findChapterPage(false, pageIndex);
            if(!pageIndex){
                return;
            }
        }
        this._setPage(pageIndex);
    }

    firstPage(){
        let pageIndex = 0;
        if(this.props.skipNonChapterPages){
            pageIndex = this.findChapterPage(true, pageIndex);
            if(!pageIndex){
                return;
            }
        }
        this._setPage(pageIndex);
    }

    lastPage(){
        let pageIndex = this.state.pages.length - 1;
        if(this.props.skipNonChapterPages){
            pageIndex = this.findChapterPage(true, pageIndex);
            if(!pageIndex){
                return;
            }
        }
        this._setPage(pageIndex);
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

ComicBook.propTypes = {
    series: PropTypes.object,
    onPageChanged: PropTypes.func,
    chapterId: PropTypes.number,
    skipNonChapterPages: PropTypes.bool.isRequired
};

export default withStyles(styles)(ComicBook);
