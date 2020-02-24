import React from 'react';
import Backend from '../api/Backend';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

const styles = {
    chapterSel: {
        width: '100%',
        backgroundColor: 'lightblue',
        borderRadius: '0.8em',
        padding: '0 1em'
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
   
    render(){
        const chapters = [];
        this.state.list.forEach(chapter => {
            let elem = <MenuItem key={chapter.id} value={chapter}>{chapter.name}</MenuItem>;
            chapters.push(elem);
        });

        // translate id chapter to chapter object
        let selectedChapter = this.props.selected;
        if(selectedChapter){
            // find the chapter by id
            selectedChapter = this.state.list.find(item => {
                return item.id === this.props.selected;
            });
        }

        const classes = this.props.classes;

        return (
            <div className={classes.wrapper}>
                <Select children={chapters} className={classes.chapterSel} value={selectedChapter ? selectedChapter : ''}
                onChange={(e) => this.props.onChapterChanged(e.target.value.id)}/>
            </div>
        );
    }

}

export default withStyles(styles)(ChapterSelector);