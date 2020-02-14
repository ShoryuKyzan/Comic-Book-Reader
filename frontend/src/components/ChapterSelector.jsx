import React from 'react';
import Backend from '../api/Backend';
import { Select, MenuItem } from '@material-ui/core';

class ChapterSelector extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }
    
    async componentDidMount(){
        // load
        // XXX problem ... if data isnt loaded then we'll have a problem
        // XXX are we supposed to call a load function in render only because that gets called?
        // the async thing doesnt like this though... it causes issue with render function...
        const list = await Backend.Series.chapters(this.props.series.id);
        this.setState({list: list});
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

        return (
            <Select value={selectedChapter} onChange={this.onChapterChanged.bind(this)}>
                {chapters}
            </Select>
        );
    }

}

export default ChapterSelector;