import React from 'react';
import { ThemedCheckbox } from './ThemedCheckbox';

import { withStyles } from '@material-ui/core/styles';

import ComicBook from './ComicBook';
import ChapterSelector from './ChapterSelector';

var styles = {
    content: {
        padding: '0 0 1em'
    },
    checkWrapper: {
        margin: '0 auto',
        width: '14em',
        color: 'white'
    },
    chapterSelWrapper:{
        margin: '0 auto',
        width: '10em',
    },
    chapterSelLabel: {
        margin: '0 auto',
        width: '4em',
        color: 'white'
    }
}
class SeriesPage extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            pageId: null,
            chapterId: null,
            skipNonChapter: false
        };
    }

    async componentDidMount(){
        if(localStorage['lastPage']){
            this.setState({pageId: localStorage['lastPage']})
        }
        if(localStorage['skipNonChapter']){
            this.setState({skipNonChapter: localStorage['skipNonChapter']})
        }
        
    }

    onChapterChanged(chapter){
        this.setState({chapter: chapter});
    }

    onClickSkipNonChapter(checked){
        // dunno if i need this XXX
    }

    onPageChanged(page){
        this.setState({
            chapter: page.chapter,
        });
        localStorage['pageId'] = page.id;
    }

    render(){
        const classes = this.props.classes;
        return (
            <div className={classes.content}>
                <ComicBook
                    series={this.props.series}
                    skipNonChapterPages={this.state.skipNonChapter}
                />
                <div>
                    <div className={classes.checkWrapper}>
                        <ThemedCheckbox
                            onChange={(e) => this.setState({skipNonChapter: e.target.checked})} 
                            checked={this.state.skipNonChapter}/>Skip Non-Chapter pages
                    </div>
                </div>
                <div>
                    <div className={classes.chapterSelLabel}>Chapter:</div>
                    <div className={classes.chapterSelWrapper}>
                        <ChapterSelector
                            series={this.props.series}
                            selected={this.state.chapter}
                            onChapterChanged={this.onChapterChanged.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(SeriesPage);