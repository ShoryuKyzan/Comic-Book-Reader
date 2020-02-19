import React from 'react';
import Backend from '../api/Backend';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

const styles = {
    chapterSel: {
        width: '100%',
        border: '1px solid darkblue',
        backgroundColor: 'lightblue'
    }
};  

class ChapterSelector extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }
    
    async componentDidUpdate(prevProps){
        // load
        if(prevProps.series !== this.props.series){
            if(this.props.series){
                const list = await Backend.Series.chapters(this.props.series.id);
                this.setState({list: list});
            }
        }
    }
   
    onChapterChanged(e){
        this.props.onChapterChanged(e.target.value);
    }

    render(){
        const chapters = [];
        this.state.list.forEach(chapter => {
            let elem = <MenuItem key={chapter.id} value={chapter}>{chapter.name}</MenuItem>;
            // set selected item
            chapters.push(elem);
        });
        let selectedChapter = '';
        if(this.props.selected){
            selectedChapter = this.props.selected;
        }

        const classes = this.props.classes;

        return (
            <div className={classes.wrapper}>
                <Select className={classes.chapterSel} value={selectedChapter} onChange={this.onChapterChanged.bind(this)}>
                    {chapters}
                </Select>
            </div>
        );
    }

}

export default withStyles(styles)(ChapterSelector);