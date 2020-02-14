import React from 'react';
import { Checkbox } from '@material-ui/core';

import ComicBook from './ComicBook';
import ChapterSelector from './ChapterSelector';

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
        return (
            <div>
                <ComicBook series={this.props.series}/>
                <Checkbox
                    onChange={(e) => this.setState({skipNonChapter: e.target.checked})} 
                    checked={this.state.skipNonChapter}/>Skip Non-Chapter pages
                <ChapterSelector
                    series={this.props.series}
                    selected={this.state.chapter}
                    onChapterChanged={this.onChapterChanged.bind(this)}/>
            </div>
        );
    }

}

export default SeriesPage;